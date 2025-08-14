import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "./Auth.css";

import user from "../../assets/person.png";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import { signup, login } from "../../hooks/user";

const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Auth = () => {
  const [action, setAction] = useState("Login");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(action === "Login" ? loginSchema : signupSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setFormError("");

    try {
      if (action === "Login") {
        await login({
          email: data.email,
          password: data.password,
        });
        toast.success("Logged in successfully!");
      } else {
        await signup({
          name: data.name,
          email: data.email,
          password: data.password,
        });
        toast.success("Signed up successfully!");
      }

      window.location.href = "/admin";
    } catch (err) {
      if (err.response?.data?.message) {
        setFormError(err.response.data.message);
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="app__navbar-logo auth-logo">
        <h1>Costolette</h1>
      </div>

      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="submit-container">
          <button
            type="button"
            className={
              action === "Login" ? "custom__button gray" : "custom__button"
            }
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>

          <button
            type="button"
            className={
              action === "Sign Up" ? "custom__button gray" : "custom__button"
            }
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>

        <div className="input-container">
          {action === "Sign Up" && (
            <div className="input">
              <img src={user} alt="user" />
              <input type="text" placeholder="Name" {...register("name")} />
            </div>
          )}
          {errors.name && <p className="error-text">{errors.name.message}</p>}

          <div className="input">
            <img src={email} alt="email" />
            <input
              type="email"
              placeholder="Email address"
              {...register("email")}
            />
          </div>
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          <div className="input">
            <img src={password} alt="password" />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          {errors.password && (
            <p className="error-text">{errors.password.message}</p>
          )}
        </div>

        {action === "Login" && (
          <div className="forgot-password">
            Forgot Password?
            <span>
              <a href="/admin/auth/forgot-password"> Click Here!</a>
            </span>
          </div>
        )}

        {formError && <em className="form_error">{formError}</em>}

        <div className="submit-container">
          <button type="submit" className="custom__button" disabled={loading}>
            {loading ? "..." : action}
          </button>
        </div>
      </form>
    </>
  );
};

export default Auth;
