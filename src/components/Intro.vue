<template>
    <div class="bg" style="background-image: url('assets/intro/bg1_blur.jpg');">
        <div class="phone" v-apparate:bounceInUp="{delay:0}">
            <img src="assets/intro/phone.png" alt="">
            <div class="phone-window">
                <div class="phone-list">
                    <template v-for="(chatItem,index) in chat">
                        <v-card v-if="chatItem.isPartner"
                                :style="{opacity: chat.length-2 > index ? '0.3' : ''}"
                                class="mt-2 mb-3 pa-1 elevation-10"
                                style="margin-right: 100px;height:100px;  background: #8ad8f1;">
                            <v-layout row justify-start align-center style="height:90px">
                                <h2 class="pa-3" style="line-height: 1.2em; min-width: 360px;">
                                    <span v-if="chatItem.waiting"
                                          class="button-anim">{{items.printing}}</span>
                                    <span v-else>{{chatItem.text}}</span>
                                </h2>
                                <!--<img style="margin-top:-30px" src="assets/intro/p1.png" alt="">-->
                            </v-layout>
                        </v-card>
                        <v-card v-else
                                :style="{opacity: chat.length-2 > index ? '0.3' : ''}"
                                class="mt-5 mb-5 pa-1 elevation-10"
                                style="margin-left: 100px;height:100px; background: #fecf6c;">
                            <v-layout row justify-start align-center style="height:90px">
                                <!--<img style="margin-top:-40px" src="assets/intro/p2.png" alt="">-->
                                <h2 class="pa-3" style="line-height: 1.2em; min-width: 360px;">
                                    {{chatItem.text}}
                                </h2>
                            </v-layout>
                        </v-card>
                    </template>
                </div>
                <!--<div v-if="finished"-->
                     <!--style="width: 100%; text-align: right;">-->
                    <!--<v-btn large @click="next"-->
                           <!--class="light-green accent-2 ma-0" style="height:90px; min-width:100px;">-->
                        <!--<v-icon large class="button-anim">play_arrow</v-icon>-->
                    <!--</v-btn>-->
                <!--</div>-->
                <v-card v-if="!finished" flat>
                    <v-layout row justify-start align-center style="height:90px">
                        <h2 class="pa-3" style="line-height: 1.2em; min-width: 395px;">
                            {{inputText}}
                        </h2>
                        <v-btn large @click="addChat()"
                               :disabled="disableButton"
                               class="ma-0" style="height:100%; min-width:85px;background: #fecf6c;">
                            <v-icon>send</v-icon>
                        </v-btn>
                    </v-layout>
                </v-card>
            </div>
            <m-btn v-if="finished" :text="$lang.value.start"  @click.native="next" class="fadeIn mt-3 ml-2"></m-btn>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                chat: [],
                position: 0,
                interval: {},
                disableSender: true,
                finished: false,
                inputText: ''
            }
        },
        mounted() {
            this.position = 0;
            let startInputText = this.startInputText
            setTimeout(() => {
                startInputText()
            }, 1000)
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        computed: {
            items() {
                return this.$lang.value.intro
            },
            disableButton() {
                return this.inputText === '' || this.disableSender
            }
        },
        methods: {
            next() {
                this.$router.push('game/0')
            },
            startInputText() {
                if (this.position >= this.items.chat.length) {
                    this.finished = true
                    return;
                }
                let length = 0;
                let text = this.items.chat[this.position].text
                this.disableSender = true
                this.interval = setInterval(() => {
                    if (length === text.length) {
                        this.disableSender = false
                        return;
                    }
                    this.inputText += text[length++]
                }, 40)
            },
            addChat() {
                let self = this
                if (this.position > this.items.chat.length - 1) return;
                this.chat.push(this.items.chat[this.position++])
                setTimeout(() => {
                    let partner = self.items.chat[self.position++]
                    partner.waiting = true
                    self.chat.push(partner)
                    setTimeout(() => {
                        partner.waiting = false
                        self.startInputText()
                    }, 2000)
                }, 1000)
                self.inputText = ''
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

    .phone {
        position: absolute;
        left: 535px;
        top: 210px;
        width: 535px;
        height: 790px;
    }

    .phone-window {
        position: absolute;
        left: 30px;
        top: 0;
        width: 480px;
        height: 790px;
        overflow: hidden;
    }

    .phone-list {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 620px;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: flex-end;
    }

    /*.phone-footer {*/
    /*position: relative;*/
    /*width: 100%;*/
    /*height: 100px;*/
    /*}*/
</style>