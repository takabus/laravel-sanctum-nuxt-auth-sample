<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Login</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <!-- メールアドレス -->
          <b-form-input v-model="email" placeholder="email"></b-form-input>
          <!-- パスワード -->
          <b-form-input v-model="password" placeholder="password"></b-form-input>
        </div>
        <b-button class="w-100" @click="login">Login</b-button>
      </div>
    </div>
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
  mounted() {},
  methods: {
    async login() {
      try {
        // 通信前にCSRF-TOKENを取得し、クッキーへセットする
        // this.$axios.get(`/sanctum/csrf-cookie`);
        // →nuxt/authなら自動的に行われるので不要である

        // ログインする
        const response = await this.$auth
          .loginWith("laravelSanctum", {
            data: {
              email: this.email,
              password: this.password
            }
          })
          .then(() => {
            // ログインに成功したら、/にページ遷移
            this.$router.push("/");
          });
        console.log(response);
      } catch (error) {
        // ログインに失敗したら、コンソールに出力する
        console.log(error);
      }
    }
  }
};
</script>