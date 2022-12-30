<template>
  <main class="app">
    <div class="random_modal" id="randomModal"></div>
    <section class="main_header">
        <div class="header">
            <h1 class="title">
                The Noble Qur'an
            </h1>
            <div class="header_buttons">
                <div @click="randomize()" class="header_btn">Randomizer</div>
            </div>
        </div>
        <div class="color_dictionary">
            <div class="statistics">
                <span>Learnt ({{updatedChapters.filter(chapter => chapter.learnt == true).length}}) </span>
                <span>Remained ({{updatedChapters.filter(chapter => chapter.learnt != true).length}})</span>
            </div>
            <div class="colors">
                <div v-for="colorItem in colorItems" :key="colorItem.title" class="color_item">
                    <div class="color_round" :class="colorItem.color"></div>
                    <span class="color_text">{{colorItem.title}}</span>
                </div>
            </div>
        </div>
    </section>
    <div class="main">
      <div 
          v-for="chapter in updatedChapters"
          :key="chapter.number"
          :class="{chapter_div: true, learnt: chapter.learnt, learning: chapter.learning, forgotten: chapter.forgotten }"
      >
            {{chapter.number}}. {{chapter.englishName}} ({{chapter.numberOfAyahs}})
            <div class="color_item" style="margin-right: 0;">
                <div 
                    @click="chapter.learning = !chapter.learning; chapter.forgotten = false; chapter.learnt = false" 
                    :style="{border: chapter.learning ? '2px solid #fff' : 'none'}" 
                    class="chapter_color__round cup color_round color_round--blue"
                ></div>
                <div 
                    @click="chapter.forgotten = !chapter.forgotten; chapter.learning = false; chapter.learnt = false"
                    :style="{border: chapter.forgotten ? '2px solid #fff' : 'none'}" 
                    class="chapter_color__round cup color_round color_round--red"
                ></div>
                <div 
                    @click="chapter.learnt = !chapter.learnt; chapter.forgotten = false; chapter.learning = false" 
                    :style="{border: chapter.learnt ? '2px solid #fff' : 'none'}" 
                    class="chapter_color__round cup color_round color_round--green"
                ></div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
const axios = require('axios');
export default {
  name: 'HomeComponent',
  data() {
    return {
      chapters: [],
      updatedChapters: [],
      colorItems: [
          { title: 'Learning', color: 'color_round--blue' },
          { title: 'Forgotten', color: 'color_round--red' },
          { title: 'Learnt', color: 'color_round--green' },
      ],
      quickActions: false
    }
  },
  methods: {
    randomize() {
        document.getElementById('randomModal').style.top = '50px';
        setTimeout(() => {
            document.getElementById('randomModal').style.top = '-150px';
        }, 1000)
        let notLearntChapters = this.updatedChapters.filter(chapter => chapter.learnt != true)
        let randomChapter = notLearntChapters[Math.floor(Math.random() * notLearntChapters.length)]
        document.getElementById('randomModal').innerText = `${randomChapter.number}. ${randomChapter.englishName}`;
    }
  },
  mounted() {
    if (localStorage.getItem('todos')) {
        this.updatedChapters = JSON.parse(localStorage.getItem('todos'));
    } 
    else {
        axios.get('http://api.alquran.cloud/v1/surah')
        .then(data => { 
            this.chapters = data.data.data;
            this.updatedChapters = this.chapters.map((chapter) => ({ ...chapter, learnt: false, forgotten: false, learning: false}))
        })
        .catch(e => {
            console.log(e);
        })
    }
  },
  watch: {
    updatedChapters: {
        handler() {
            localStorage.setItem('todos', JSON.stringify(this.updatedChapters))
        },
        deep: true
    }   
  }
}
</script>

<style scoped lang="scss">
.random_modal {
    width: 400px;
    height: 100px;
    background-color: #2e2825;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: fixed;
    z-index: 99;
    top: -100px;
    transition: top .3s ease-in-out;
}
.main_header {
    position: sticky;
    top: 0;
    z-index: 98;
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    backdrop-filter: blur(5px);
}
.header {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0 20px 0;
    gap: 20px;
}
.title {
    color: #2e2825;
}
.header_buttons {
    display: flex;
    gap: 5px;
}
.header_btn {
    background-color: #2e2825;
    color: #fff;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
}
.quick_actions {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.quick_action {
    padding: 10px 20px;
    background-color: #2e2825;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
}
.quick_actions_close {
    padding: 20px;
    background-color: #2e2825;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
}
.main {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    padding-bottom: 30px;
}
.chapter_div {
    padding: 20px;
    background-color: #2e2825;
    border-radius: 3px;
    color: #fff;
    transition: .2s;
    display: flex;
    justify-content: space-between;
}
.learnt {
    background-color: #608660;
}
.learning {
    background-color: #7088f0;
}
.forgotten {
    background-color: crimson;
}
.color_dictionary {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 10px 0;
}
.statistics {
    font-weight: 500;
    color: #2e2825;
}
.colors {
    display: flex;
    gap: 15px;
}
.color_item {
    display: flex;
    align-items: center;
}
.color_round {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 5px;
}
.color_text {
    font-weight: 500;
}
.color_round--blue {
    background-color: #7088f0;
}
.color_round--red {
    background-color: crimson;
}
.color_round--green {
    background-color: #608660;
}
@media all and (max-width: 800px) {
    .main {
        grid-template-columns: repeat(2, 1fr);
    }
}
.cup {
    cursor: pointer;
}
.chapter_color__round {
    transform: scale(1.1);
}
@media all and (max-width: 620px) {
    .header {
        flex-direction: column;
        align-items: center;
    }
    .color_dictionary {
        flex-direction: column;
        gap: 10px;
    }
    .main {
        grid-template-columns: repeat(1, 1fr);
    }
    .chapter_color__round {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
}
@media all and (max-width: 320px) {
    .random_modal {
        width: 200px;
        height: 60px;
        font-size: 14px;
    }
    .title {
        font-size: 28px;
        text-align: center;
    }
    .header_buttons {
        justify-content: center;
        gap: 5px;
    }
    .header_btn {
        padding: 8px 16px;
        font-size: 12px;
    }
    .colors {
        transform: scale(0.8);
    }
    .quick_actions {
        padding: 0;
    }
    .quick_action {
        padding: 8px 16px;
    }
    .quick_actions_close {
        padding: 18px;
    }
}
</style>
