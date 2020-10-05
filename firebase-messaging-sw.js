importScripts("https://www.gstatic.com/firebasejs/7.22.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/7.22.0/firebase-messaging.js")

var firebaseConfig = {
    apiKey: "AIzaSyCIO7jC8o9D94C4GGjqObBRLRMW1nTUi9A",
    authDomain: "fcm-example-app-23bca.firebaseapp.com",
    databaseURL: "https://fcm-example-app-23bca.firebaseio.com",
    projectId: "fcm-example-app-23bca",
    storageBucket: "fcm-example-app-23bca.appspot.com",
    messagingSenderId: "886334570310",
    appId: "1:886334570310:web:0bad0bd337b7178e50af47",
    measurementId: "G-FRFLJQT0KG"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging=firebase.messaging();
  
  messaging.setBackgroundMessageHandler(function (payload) {
      console.log(payload);
      const notification=JSON.parse(payload);
      const notificationOption={
          body:notification.body,
          icon:notification.icon
      };
      return self.registration.showNotification(payload.notification.title,notificationOption);
  });