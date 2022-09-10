<template>
  <div class="container">
    <b-button @click="getUser">Get User Data</b-button>
    <b-button to='/logout'>Logout</b-button>
    <div>{{user}}</div>
    <Tutorial />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      user: null
    };
  },
  methods: {
    // ユーザーの情報を取得する
    async getUser() {
      this.user = await this.$auth.user;
    }
  }
};
</script>
