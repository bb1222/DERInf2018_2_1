<template>
    <div class="bg" style="background-image: url('assets/video/bg1.jpg')">

        <video :src="items.video.src"
               style="position: absolute;left: 380px;top: 220px; max-width:870px;"
               frameborder="0"
               muted
               loop
               autoplay
        >
        </video>


        <!--<audio ref="">-->
        <!--<source :src="items.audios[0]" type="audio/mpeg">-->
        <!--Тег audio не поддерживается вашим браузером.-->
        <!--<a :href="items.audios[0]">Скачайте музыку</a>.-->
        <!--</audio>-->


        <div class="wolf-daemon" @click="onClickWolf"></div>
        <h1 class="video-text grey lighten-4 pa-4" style="line-height: 1.3em;">
            <span>{{text}}</span><span
                :class="[items.text.length === text.length ? 'cursor-anim' : '']">_</span>
        </h1>

        <v-btn v-if="showNext" large dark style="position: absolute;bottom: 120px; right:100px;"
               @click="skip">
            <span class="grey--text">{{$lang.value.skip}}</span>
        </v-btn>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                audioWolf: null,
                audio: null,
                interval: {},
                text: '',
                showNext: false,
            }
        },
        mounted() {
            this.showNext = this.$lang.value.parts.length - 1 > this.$route.params.gameId;
            let self = this
            self.text = ''
            this.audioWolf = new Audio('assets/video/Sound_01450.mp3')
            let length = 0;
            self.interval = setInterval(() => {
                if (length === self.items.text.length) {
                    return;
                }
                self.text += self.items.text[length++]
            }, 60)

            if (this.$store.state.soundEffects) {
                this.audio = new Audio()
                this.audio.src = this.items.audio
                this.audio.onended = () => {
                    // if (this.audio.src !== self.items.audio2) {
                    this.audio.src = self.items.audio2
                    this.audio.play()
                    this.audio.onended = null;
                }
                this.audio.play()
            }
        },
        beforeDestroy() {
            if (this.audio) this.audio.pause()
            clearInterval(this.interval)
        },
        methods: {
            skip() {
                this.$router.push({name: 'game', params: {gameId: +this.$route.params.gameId + 1}})
            },
            onClickWolf() {
                this.audioWolf.currentTime = 0;
                this.audioWolf.pause()
                this.audioWolf.play()
            }
        }
    }
</script>

<style>
    .video-text {
        position: absolute;
        left: 50%;
        bottom: 120px;
        margin-left: -450px;
        width: 900px;
        height: 180px;
    }

    .wolf-daemon {
        background: transparent;
        width: 200px;
        cursor: pointer;
        height: 220px;
        position: absolute;
        right: 50px;
        bottom: 200px;
    }
</style>