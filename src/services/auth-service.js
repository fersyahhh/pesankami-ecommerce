import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const accessToken = result._tokenResponse?.oauthAccessToken;

    return {
      accessToken,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    };
  } catch (err) {
    console.error("Login Error", err);
  }
}

export async function loginWithTwitter() {
  try {
    const provider = new TwitterAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log("User Logged In:", result.user);
  } catch (err) {
    console.error("Login Error", err);
  }
}

export async function loginWithFacebook() {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log("User Logged In:", result.user);
  } catch (err) {
    console.error("Login Error", err);
  }
}
