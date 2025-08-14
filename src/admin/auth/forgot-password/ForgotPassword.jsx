import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ForgotPassword.css";
import { sendOtp, verifyOtp, resetPasswordWithOtp } from "../../../hooks/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (step === 1) {
        const res = await sendOtp(data.email);
        setEmail(data.email);
        toast.success(res.message);
        setStep(2);
        reset();
      } else if (step === 2) {
        const res = await verifyOtp(email, data.otp);
        setOtp(data.otp);
        toast.success(res.message);
        setStep(3);
        reset();
      } else if (step === 3) {
        const res = await resetPasswordWithOtp(email, otp, data.password);
        toast.success(res.message);
        reset();

        navigate("/admin/auth");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const currentStepTitle =
    step === 1
      ? "Enter your email"
      : step === 2
      ? "Enter OTP that was sent to your email"
      : "Enter new Password";

  return (
    <>
      <div className="app__navbar-logo auth-logo">
        <h1>Costolette</h1>
      </div>

      <div className="forgot-container">
        <div className="forgot-box">
          <h2>Forgot Password</h2>
          <p className="step-title">{currentStepTitle}</p>

          <form onSubmit={handleSubmit(onSubmit)} className="step-form">
            {step === 1 && (
              <>
                <input
                  type="email"
                  className="step-input"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <button type="submit" className="enter" disabled={loading}>
                  {loading ? "..." : "Enter"}
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <input
                  type="text"
                  placeholder="OTP"
                  {...register("otp", { required: true })}
                />
                <button type="submit" className="enter" disabled={loading}>
                  {loading ? "..." : "Verify OTP"}
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <input
                  type="password"
                  placeholder="New Password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                <button type="submit" className="enter" disabled={loading}>
                  {loading ? "..." : "Reset Password "}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
