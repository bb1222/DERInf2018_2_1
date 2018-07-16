<template>
    <div class="bg">

        <div id="card" class="white">
            <div style="position: relative; width: 100%;height:100%; overflow: hidden;">
                <div id="line-long" class="mblack-bg" style="opacity: 0" v-apparate:fadeInDown="{delay:200}"></div>
                <div id="line-short" class="mblack-bg" style="opacity: 0" v-apparate:fadeInUp="{delay:200}"></div>
                <template v-if="switchedOn">
                    <p v-apparate:fadeInLeft="{delay:500}"
                       style="font-size: 60px; opacity: 0"
                       class="mblack-text ml-5"
                       v-html="$lang.value.subject"></p>

                    <p style="font-size: 30px;" class="ml-5 mt-5">
                        <!--<span style="color:transparent;">__</span>-->
                        {{title}}<span
                            v-show="switchedOn"
                            :class="[$lang.value.title.length === title.length ? 'cursor-anim' : '']">_</span>
                    </p>

                    <p v-apparate:fadeInLeft="{delay:800}"
                       style="font-size: 24px; position: absolute;bottom: 100px;opacity: 0" class="headline ml-5">
                        <span style="font-size: 230px; font-family: AppFontIntroDigits">{{gradeDigit}}</span>
                        {{gradeText}}
                    </p>
                    <m-btn :text="$lang.value.start"
                           class="fadeInLeft"
                           v-show="$lang.value.title.length === title.length"
                           @click.native="start"
                           style="position: absolute;bottom: 0;left: 0; opacity: 0;"></m-btn>
                </template>
                <div v-else>
                    <div id="window-button" @click="switchOn"></div>
                </div>

            </div>
        </div>
        <h3 class="grey--text"
            style="position: absolute;bottom: 30px;left: 0;width: 100%;text-align: center;">&copy;
            {{$lang.value.copyright}}</h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                switchedOn: false,
                interval: {},
                title: ''
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        mounted() {
            setTimeout(() => {
                this.switchOn()
            }, 500)
        },
        computed: {
            gradeDigit() {
                return this.$lang.value.grade.split(' ')[0] || this.$lang.value.grade.split('-')[0]
            },
            gradeText() {
                return this.$lang.value.grade.split(' ')[1] || this.$lang.value.grade.split('-')[1]
            }
        },
        methods: {
            switchOn() {
                this.switchedOn = true;
                let self = this
                setTimeout(() => {
                    let length = 0;
                    self.title = ''
                    this.interval = setInterval(() => {
                        if (length === self.$lang.value.title.length) {
                            return;
                        }
                        self.title += self.$lang.value.title[length++]
                    }, 60)
                }, 1000)
            },
            start() {
                this.$router.push({name: 'intro'})
            }
        }
    }
</script>

<style>
    #window-button {
        background: transparent;
        cursor: pointer;
        position: absolute;
        left: 390px;
        top: 300px;
        width: 800px;
        height: 420px;
    }

    #line-long {
        position: absolute;
        left: 0;
        top: 0;
        width: 8px;
        height: 550px;
        pointer-events: none;
    }

    #line-short {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 8px;
        height: 65px;
        pointer-events: none;
    }

    #card {
        position: absolute;
        bottom: 335px;
        left: 540px;
        width: 510px;
        height: 675px;
    }
</style>