import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

export const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();

    await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });
  } catch (error) {
    console.error("login error:", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    await fetch("/api/logout", { method: "POST" });
  } catch (error) {
    console.error("logout error:", error);
  }
};
