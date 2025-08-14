import apiClient from "./api";
import { jwtDecode } from "jwt-decode";

const tokenName = "token";

export async function signup(user) {
  const { data } = await apiClient.post("/api/user/signup", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  sessionStorage.setItem("token", data.token);
}

export async function login(user) {
  const { data } = await apiClient.post("/api/user/login", user);
  sessionStorage.setItem(tokenName, data.token);
}

export async function sendOtp(email) {
  const { data } = await apiClient.post("/api/user/send-otp", { email });
  return data;
}

export async function verifyOtp(email, otp) {
  const { data } = await apiClient.post("/api/user/verify-otp", { email, otp });
  return data;
}

export async function resetPasswordWithOtp(email, otp, password) {
  const { data } = await apiClient.post("/api/user/reset-password", {
    email,
    otp,
    password,
  });
  return data;
}

export function logout() {
  sessionStorage.removeItem(tokenName);
}

export function getJwt() {
  return sessionStorage.getItem(tokenName);
}

export function getDecodedJwt() {
  const token = getJwt();
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}
