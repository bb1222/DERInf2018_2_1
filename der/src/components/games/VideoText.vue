<template>
    <div class="bg">
        <div class="mblack-bg" style="height: 810px;width: 1165px; position: relative;margin: 165px 0 0 220px;">
            <video :src="items[position].video.src"
                   style="position: absolute;max-width:1165px;"
                   frameborder="0"
                   muted
                   loop
                   autoplay
            >
            </video>
            <h1 class="video-text pa-5" style="line-height: 1.15em;">
                <span>{{text}}</span><span
                    :class="[items[position].text.length === text.length ? 'cursor-anim' : '']">_</span>
            </h1>

            <div style="position: absolute;top: 105%;left: 0%;width: 100%; text-align: center;">
                <m-btn v-if="showPrev" :text-left="true" :text="$lang.value.back" @click.native="prev"></m-btn>
                <m-btn v-if="showSkip" :text="$lang.value.skip" @click.native="skip"></m-btn>
                <m-btn v-else-if="showNext" :text="$lang.value.next" @click.native="next"></m-btn>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                position: 0,
                audioWolf: null,
                audio: null,
                interval: {},
                text: '',
            }
        },
        computed: {
            showNext() {
                return this.$lang.value.parts.length - 1 > this.$route.params.gameId;
            },
            showSkip() {
                return this.position < this.items.length - 1
            },
            showPrev() {
                return this.position > 0
            }
        },
        mounted() {
            this.$store.commit('muteMusic', true);
            this.audioWolf = new Audio('assets/video/Sound_01450.mp3')
            this.position = 0;
            this.updateContent()
        },
        beforeDestroy() {
            this.$store.commit('muteMusic', false)
            this.clearContent()
        },
        watch: {
            position() {
                this.clearContent()
                this.updateContent()
            },
            items(val) {
                this.position = 0;
                this.clearContent()
                this.updateContent()
            },
            '$store.state.soundEffects'(val) {
                if (!val) {
                    this.audio.pause()
                    this.audioWolf.pause()
                }
            }
        },
        methods: {
            clearContent() {
                if (this.audio) this.audio.pause()
                this.text = '';
                clearInterval(this.interval)
            },
            updateContent() {
                let self = this;
                let length = 0;
                self.interval = setInterval(() => {
                    if (length === self.items[self.position].text.length) {
                        return;
                    }
                    self.text += self.items[self.position].text[length++]
                }, 40)

                if (self.$store.state.soundEffects) {
                    self.audio = new Audio()
                    self.audio.src = self.items[self.position].audio
                    if (self.items[self.position].audio2) {
                        this.audio.onended = () => {
                            this.audio.src = self.items[self.position].audio2
                            this.audio.play()
                            this.audio.onended = null;
                        }
                    }
                    this.audio.play()
                }
            },
            skip() {
                this.position++;

            },
            prev(e) {
                this.position--;
            },
            next() {
                this.$router.push({name: 'game', params: {gameId: +this.$route.params.gameId + 1}})
            },
            onClickWolf() {
                if (!this.$store.state.soundEffects) return;
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
        left: 0;
        bottom: 0;
        width: 100%;
        color: white;
        background-color: #40739b;
        height: 200px;
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