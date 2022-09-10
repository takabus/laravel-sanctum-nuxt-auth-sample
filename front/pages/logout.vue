<template>
  <div class="container">
    <h1>Logout</h1>
    <b-button @click="logout">Logout</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "t@localhost",
      password: "password"
    };
  },
  methods: {
    // ログアウトする
    logout() {
      this.$auth.logout().then(() => {
        window.alert("ログアウトしました!");
        this.$router.push("/login");
      });
    }
  },
};
</script>