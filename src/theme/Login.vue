<template>
  <div class="content">
    <h2>Login</h2>

    <div v-if="isAuthenticated">
      <p>Hello, authenticated user!</p>
      <p>
        <span>Name: <strong>{{ profile.firstName }}</strong></span><br>
        <span>Favorite Sandwich: <strong>{{ profile.favoriteSandwich }}</strong></span>
      </p>
      <button v-on:click="logout()"
              class="button is-primary">
        Logout
      </button>
    </div>

    <div v-else>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>

        <div class="field-body">
          <div class="field">
          <div class="control">
            <input class="input"
                   type="text"
                   v-model="username"
                   placeholder="Your username">
          </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>

        <div class="field-body">
          <div class="field">
          <div class="control">
            <input class="input"
                   type="password"
                   v-model="password"
                   placeholder="Your password">
          </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>

        <div class="field-body">
          <div class="field">
          <div class="control">
            <button v-on:click="login()"
                    class="button is-primary">
              Login
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import appService from './../app.service';

  export default {
    data() {
      return {
        username: '',
        password: '',
        isAuthenticated: false,
        profile: {},
      };
    },

    watch: {
      isAuthenticated(val) {
        if (val) {
          appService.getProfile().then(profile => {
            this.profile = profile;
          });
        } else {
          this.profile = {};
        }
      },
    },

    methods: {
      login() {
        const credentials = {
          username: this.username,
          password: this.password,
        };

        appService.login(credentials).then(data => {
          window.localStorage.setItem('token', data.token);
          window.localStorage.setItem('tokenExpiration', data.expiration);
          this.isAuthenticated = true;
          this.username = '';
          this.password = '';
        }).catch(() =>
          window.alert('Could not login!')
        );
      },

      logout() {
        window.localStorage.setItem('token', null);
        window.localStorage.setItem('tokenExpiration', null);
        this.isAuthenticated = false;
      },
    },

    created() {
      const expiration = window.localStorage.getItem('tokenExpiration');
      const unixTimestamp = new Date().getTime() / 1000;

      if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
        this.isAuthenticated = true;
      }
    },
  };
</script>
