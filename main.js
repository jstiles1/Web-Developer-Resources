    //Listen for contact form submit
    document.getElementById('contactForm').addEventListener('submit', submitContactForm);

    function submitContactForm(e) {
      e.preventDefault();

      console.log(123);
    }
    /*
        // Your web app's Firebase configuration
        var firebaseConfig = {
          apiKey: "AIzaSyC5LG3MezqBc13DYSHC7BMYDzH1aHVcjVc",
          authDomain: "web-dev-resources-123ab.firebaseapp.com",
          databaseURL: "https://web-dev-resources-123ab.firebaseio.com",
          projectId: "web-dev-resources-123ab",
          storageBucket: "web-dev-resources-123ab.appspot.com",
          messagingSenderId: "535193395656",
          appId: "1:535193395656:web:60604fa2d498a60be160fd"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);*/