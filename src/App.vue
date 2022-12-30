<template>
  <main class="main">
    <div class="nav"> 
      <router-link class="nav__item" to="/">Home</router-link>
      <router-link class="nav__item" to="/prostration_verses">Prostration verses</router-link>
      <router-link class="nav__item" to="/rabbana_duas">Rabbana duas</router-link>
      <router-link class="nav__item" to="/prostration_verses">Other page</router-link>
    </div>
    <router-view/>
  </main>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }
  :root {
    --dark: #2e2825
  }
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #332f2d;
  }
  ::-webkit-scrollbar-track {
    background-color: #e0d7d7;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
  }
  .main {
    width: 100%;
  }
  .nav {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 0 0;
    gap: 25px;
  }
  .nav__item {
    text-decoration: none;
    color: #2e2825;
    font-weight: 500;
    width: auto;
  }
  @media all and (max-width: 450px) {
      .nav {
        display: none;
      }
  }
</style>
