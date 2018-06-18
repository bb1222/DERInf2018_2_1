<template>
    <v-card flat class="transparent">
        <div style="width:630px; height:115px; position:relative;overflow: hidden;">
            <div class="grey darken-3 white--text pa-3 bodyCard"
                 :style="{height:show?'240px':'120px'}"
                 @click="onClickCard"
                 @mouseover="show=true" @mouseleave="show=false">
               <div style="height: 115px; display:table;">
                   <p class="display-1 title-part text-xs-center white--text" style="font-weight: 700; display:table-cell; vertical-align:middle;" v-if="part.title">{{part.title}}</p>
               </div>
               <div style="height: 115px;  display:table;" v-show="show">
                   <div style="display:table-cell; vertical-align:middle;padding-top: 20px;">
                       <transition name="fade2">
                           <p style="font-size: 1.6em; line-height:1.2em; font-weight: 700;" class="text-xs-center pr-3 pl-3"  v-if="part.info">
                               {{part.info}}
                           </p>
                       </transition>
                   </div>
               </div>
            </div>
        </div>
    </v-card>
</template>

<script>
    export default {
        props: ['part', 'id'],
        data: () => ({
            show: false
        }),
        methods: {
            onClickCard() {
                this.$router.push({name: 'game', params: {gameId: this.id}})
            }
        }
    }
</script>

<style lang="stylus">

    .fade2-enter-active
        transition: opacity 0.5s !important;

    .fade2-leave-active
        transition: opacity 0.5s !important;

    .fade2-enter, .fade2-leave-to
        opacity: 0;

    .bodyCard
        position: absolute;
        width: 100%;
        bottom: 0;
        cursor: pointer;
        -webkit-transition: height 0.5s !important
        -moz-transition: height 0.5s !important
        -ms-transition: height 0.5s !important
        -o-transition: height 0.5s !important
        transition: height 0.5s !important
        display: flex;
        flex-direction: column;
        justify-content space-around;
        align-items center;

    .title-part
        -webkit-transition: all 0.5s !important
        -moz-transition: all 0.5s !important
        -ms-transition: all 0.5s !important
        -o-transition: all 0.5s !important
        transition: all 0.5s !important
</style>