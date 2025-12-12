import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  linkWithCredential,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

// Auth Via Google
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

// Auth Via Twitter
export async function loginWithTwitter() {
  try {
    const provider = new TwitterAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    return {
      accessToken,
      name: user.displayName,
      photoURL: user.photoURL,
    };
  } catch (err) {
    console.error("Login Error", err);
  }
}

// Auth Via Facebook
export async function loginWithFacebook() {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    return {
      accessToken,
      name: user.displayName,
      photoURL: user.photoURL,
    };
  } catch (err) {
    console.error("Login Error", err);

    if (err.code === "auth/account-exists-with-different-credential") {
      const email = err.customData.email;
      const pendingCred = err.credential;

      // Cek provider lama
      const methods = await fetchSignInMethodsForEmail(auth, email);

      // Jika akun lama memakai Google
      if (methods.includes("google.com")) {
        const googleProvider = new GoogleAuthProvider();
        const googleResult = await signInWithPopup(auth, googleProvider);

        // Link Facebook credential ke akun Google
        await linkWithCredential(googleResult.user, pendingCred);

        console.log("Akun Facebook berhasil digabung ke Google!");

        return googleResult.user;
      }
    }
  }
}
