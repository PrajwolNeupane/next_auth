import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userID }: any) => {
  try {
    //Create token
    const hashedToken = await bcryptjs.hash(userID.toString(), 10);

    if (emailType == "VERIFY") {
        console.log(hashedToken)
      await User.findByIdAndUpdate(
        userID,
        {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(
        userID,
        {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: `${process.env.MAIL_TRANSPOTER_USER!}`,
        pass: `${process.env.MAIL_TRANSPOTER_PASSWORD!}`,
      },
    });


    const mailOptions = {
        from:"prajwolneupane68@gmail.com",
        to:email,
        subject:emailType === "VERIFY" ? "Verify your email" : "Reset your password",
        html:`<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to
        ${emailType === "VERIFY" ?  "verify your email": "reset your password"}
        </p>`
    }

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (e) {
    console.log(e);
  }
};
