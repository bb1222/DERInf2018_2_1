<template>
    <v-app>
        <div class="screen">
            <v-toolbar flat class="transparent">
                <v-toolbar-items class="ma-0" v-if="$route.name!=='main' && $route.name!=='start'">
                    <v-btn dark color="grey darken-3" @click.native="$router.push({name: 'main'})">
                        <v-icon>arrow_back</v-icon>
                    </v-btn>
                </v-toolbar-items>
                <v-toolbar-items class="ma-0" v-else>
                    <v-btn disabled flat></v-btn>
                </v-toolbar-items>

                <v-toolbar-items>
                    <v-btn color="grey darken-3" dark @click.native="onSwitchSound()">
                        <v-icon>{{soundEffects ? 'volume_up' : 'volume_off'}}</v-icon>
                    </v-btn>
                </v-toolbar-items>
                <v-toolbar-items>
                    <v-menu offset-y>
                        <v-btn color="grey darken-3" dark app slot="activator">
                            <!--{{currentLangName.title}}-->
                            <img :src="currentLangName.image" width="40px" alt="">
                        </v-btn>
                        <v-list>
                            <v-list-tile v-for="(item,index) in languages" :key="index" @click="onClickLang(index)">
                                <v-list-tile-title
                                        style="height:30px; display: flex; justify-content: center; align-items: center">
                                    <!--{{ item.title }}-->
                                    <img :src="item.image" style="height:100%;" alt="">
                                </v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </v-toolbar-items>
            </v-toolbar>
            <v-content>
                <transition name="fade">
                    <router-view/>
                </transition>
            </v-content>
        </div>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            music: null,
            languages: {
                kz: {
                    image: 'assets/flags/034-kazakhstan.png',
                    title: 'ҚАЗ'
                },
                ru: {
                    image: 'assets/flags/228-russia.png',
                    title: 'РУС'
                },
                en: {
                    image: 'assets/flags/153-united-states-of-america.png',
                    title: 'ENG'
                }
            },
            soundEffects: null,
            parts: null,
            drawer: null,
            musicsAllowPages: ['main', 'start', 'res']
        }),
        watch: {
            soundEffects: function (val) {
                this.$store.commit('setSoundKey', val);
                if (val == true) this.music.play();
                else this.music.pause();
            },
            '$route'(to, from) {

                if (this.musicsAllowPages.includes(to.name) && this.soundEffects) {
                    this.music.play()
                }

                if (this.musicsAllowPages.includes(from.name)) {
                    this.music.pause()
                }
            }
        },
        computed: {
            currentLangName() {
                return this.languages[this.$lang.getLang()];
            },
        },
        beforeCreate() {
            if (!this.$route.params.lang) {
                this.$router.push('/ru/start');
            }
        },
        mounted() {
            this.music = new Audio();
            this.music.volume = 0.6;
            this.music.src = 'assets/sound/bg.mp3';
            this.music.loop = true;
            this.soundEffects = this.$store.state.soundEffects
            if (this.soundEffects) this.music.play();
        },
        beforeDestroy() {
            if (this.music.played) this.music.pause()
        },
        methods: {
            onClickLang(lang) {
                this.$router.push({params: {lang: lang}});
            },
            onSwitchSound() {
                this.soundEffects = !this.soundEffects;
            },
        }
    }
</script>

<style>
    html {
        background: transparent !important;
    }

    #app {
        background-color: transparent !important;
    }

    .btn {
        border-radius: 0;
    }

    .screen {
        border: 1px dashed black;
        position: relative;
        width: 1440px;
        height: 900px;
    }

    .progress-linear {
        border: 8px solid #424242;
    }

</style>
