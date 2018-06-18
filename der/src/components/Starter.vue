<template>
    <div class="bg" :style="{backgroundImage: `url(${loaded ? 'assets/starter/bg1.jpg' : 'assets/starter/bg0.jpg'})`}">

        <template v-if="loaded">
            <label v-apparate:fadeIn="{delay:0}"
                   style="position: absolute;left: 460px;top: 400px; font-family: AppFont900;"
                   class="display-1 cyan--text"
                   v-html="$lang.value.subject"></label>
            <label v-apparate:fadeIn="{delay:0}"
                   style="position: absolute;left: 460px;top: 440px;font-family: AppFont900;"
                   class="headline">{{$lang.value.grade}}</label>


            <label style="position: absolute;left: 460px;top: 520px;font-family: AppFont900; max-width:680px;"
                   class="display-1">
                <span>{{title}}</span><span
                    :class="[$lang.value.title.length === title.length ? 'cursor-anim' : '']">_</span>
            </label>


            <v-btn style="position: absolute;left: 1000px;top: 620px; "
                   dark large color="cyan"
                   v-apparate:fadeInUp="{delay:0}"
                   v-show="$lang.value.title.length === title.length"
                   @click="start">
                <v-icon large>play_arrow</v-icon>
            </v-btn>
        </template>

        <h2 class="grey--text text--darken-2"
            style="position: absolute;bottom: 30px;left: 0;width: 100%;text-align: center;">&copy;
            {{$lang.value.copyright}}</h2>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                loaded: false,
                interval: {},
                title: ''
            }
        },
        mounted() {
            let self = this
            setTimeout(() => {
                self.loaded = true;
                let length = 0;
                self.interval = setInterval(() => {
                    if (length === self.$lang.value.title.length) {
                        return;
                    }
                    self.title += self.$lang.value.title[length++]
                }, 60)
            }, 1000)
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        methods: {
            start() {
                this.$router.push({name: 'intro'})
            }
        }
    }
</script>

<style>
    .cursor-anim {
        animation: anim-cursor 1.5s infinite;
    }

    @keyframes anim-cursor {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>