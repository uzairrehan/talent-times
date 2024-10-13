import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  // updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { app } from "./firebaseconfig";
// import { toast } from "react-toastify";
// import { saveUser } from "./firebasefirestore";
import { toast } from "@/hooks/use-toast";

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function signupWithEmailPassword(
  email: string,
  password: string,
  // userName: string
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { email, uid } = userCredential.user;
      // console.log(email, uid, userName, "user created successfully.");
      // updateProfile(userCredential.user, {
      //   displayName: userName,
      // });
      // console.log(userCredential);
      // saveUser(email, userName, uid);
      // toast.success(`Signed Up with email : ${email}`);
      toast({
        title: "User Created !",
        description: `With Email ${userCredential.user.email}`,
      })

        })


    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage, errorCode);
      toast({
        title: "Could'nt Create !",
        description:errorMessage ,
      })
    });
}

export function loginWithEmailPassword(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { email, uid } = userCredential.user;
      console.log(email, uid, "user LOGGED IN successfully.", userCredential);
      toast({
        title: "Loged in successfully !",
        description: `With Email ${email}`,
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage, errorCode);
      toast({
        title: "Cant Login!",
        description: errorMessage,
      })
    });
}

export async function googleSign() {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      // updateUser(auth.currentUser?.email, user.displayName, user.uid, user.photoURL as string);
      console.log(token, user);
      toast({
        title: "Google succeed !",
        description: `With Email ${user.email}`,
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
      toast({
        title: "Can't Continue with Google !",
        description: errorMessage,
      })
    });
}

export function signOutFunc() {
  signOut(auth)
    .then(() => {
      console.log();
      toast({
        title: "Logout Successfully!",
      })
    })
    .catch((error) => {
      console.log(error);
      toast({
        title: "Can;t Logout",
        description: error ,
      })
    });
}

export function passwordReset(email: string) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("sent");
      toast({
        title: "Email Sended!",
        description:`Check Inbox of ${email}` ,
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast({
        title: "Cant Send!",
        description: errorMessage ,
      })
    });
}


export async function emailVerify(user) {
  sendEmailVerification(user)
  .then(() => {
    alert("Verification email sent! Please check your inbox.");
  })
  .catch((error) => {
    console.error(error);
    alert("Error sending verification email.");
  });
}