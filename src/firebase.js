import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAZj6byMtFY7PMtcWRpuXFQFebqoVQE9ys",
    authDomain: "linkedin-clone-yt-d947d.firebaseapp.com",
    projectId: "linkedin-clone-yt-d947d",
    storageBucket: "linkedin-clone-yt-d947d.appspot.com",
    messagingSenderId: "538769019274",
    appId: "1:538769019274:web:a73ee52012a8fc31987873"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth();
  
  export {auth};
  export default db;
 