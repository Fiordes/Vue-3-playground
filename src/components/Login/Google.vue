<template>
  <section class="my-2 text-center">
    <button @click="loginWithGoogle" class=" rounded border p-2">
      Login with Google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/fire-base";

export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          console.log(token);
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // ...
        })
        .then(() => {
          this.$emit("close-login-from-google");
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          console.log(errorCode);
        });
    },
  },
};
</script>

<style></style>
