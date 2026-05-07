<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAJIxWLfO1om0JfjgqjJgYon6lt6lW5eVg",
    authDomain: "collegebuddychat.firebaseapp.com",
    databaseURL: "https://collegebuddychat-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "collegebuddychat",
    storageBucket: "collegebuddychat.firebasestorage.app",
    messagingSenderId: "693745482604",
    appId: "1:693745482604:web:36ff21445733086fb25149",
    measurementId: "G-ZC83B461ZQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>