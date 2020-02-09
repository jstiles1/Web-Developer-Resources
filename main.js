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
     firebase.initializeApp(firebaseConfig);
     //Ref messages collection
     let messagesRef = firebase.database().ref('messages');

     //Listen for contact form submit
     document.getElementById('contactForm').addEventListener('submit', submitContactForm);

     //Submit contact form

     function submitContactForm(e) {
       e.preventDefault();

       //get values
       let contactFormName = getInputVal('contactFormName');
       let contactFormEmail = getInputVal('contactFormEmail');
       let contactFormMessage = getInputVal('contactFormMessage');
       let contactFormSubmit = getInputVal('contactFormSubmit');

       //save message
       saveMessage(contactFormName, contactFormEmail, contactFormMessage, contactFormSubmit);
     };

     //shortcut function get form values
     function getInputVal(id) {
       return document.getElementById(id).value;
     }

     //Save message to firebase
     function saveMessage(contactFormName, contactFormEmail, contactFormMessage, contactFormSubmit) {
       let newMessageRef = messagesRef.push();
       newMessageRef.set({
         contactFormName: contactFormName,
         contactFormEmail: contactFormEmail,
         contactFormMessage: contactFormMessage,
         contactFormSubmit: contactFormSubmit

       });
     }