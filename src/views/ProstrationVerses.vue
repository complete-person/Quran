<template>
  <div class="prostration-verses">
    <div class="title">Prostration verses</div>
    <div class="main">
      <div v-for="verse in verses" :key="verse.number" class="verse">
        <div class="verse__inner eng">
          {{verse.surah.number}}. {{verse.surah.englishName}}
        </div>
        <div class="verse__inner arb">
          {{verse.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      verses: []
    }
  },
  mounted() {
    axios.get('http://api.alquran.cloud/v1/sajda/quran-uthmani')
    .then(data => { 
      console.log(data);
      this.verses = data.data.data.ayahs
    })    
    .catch((e) => {
      console.log(e);
    })
  },
}
</script>

<style scoped>
  .title {
    text-align: center;
    padding: 20px 0;
    color: var(--dark);
    font-size: 30px;
    font-weight: bold;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
  }
  .main {
    max-width: 800px;
    margin: 0 auto;
  }
  .verse {
    width: 100%;
    color: var(--dark);
    font-size: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .eng {
    font-size: 18px;
    font-weight: 500;
  }
  .arb {
    text-align: right;
    background-color: var(--dark);
    padding: 50px;
    color: #fff;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  @media all and (max-width: 800px) {
    .main {
      padding: 0 50px;
    }
    .arb {
      font-size: 20px;
    }
  }
</style>