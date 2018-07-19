<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/" exact>
        <img src="./../img/logo.png"
             alt="Vue SPA" />
      </router-link>

      <router-link to="/category/front-end"
                   exact
                   class="nav-item is-tab">
        Front-end
      </router-link>

      <router-link :to="{ name: 'category', params: { id: 'mobile' } }"
                   exact
                   class="nav-item is-tab">
        Mobile
      </router-link>

      <router-link to="/login"
                   class="nav-item is-tab">
        Login
      </router-link>
    </div>
  </nav>
</template>
