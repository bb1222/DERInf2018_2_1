<template>
    <div class="bg">
        <div>

            <Lect1 v-if="position===0"></Lect1>
            <Lect2 v-else></Lect2>

            <v-card class="fadeInUp text-container" style="background:#31a5e2; color:white;">
                <p class="lect-title">
                    {{items.title}}
                    <br>
                    {{items.subtitle}}
                </p>
                <p class="lect-text">
                    {{items.parts[position].text}}
                </p>
            </v-card>
        </div>

        <div style="position: absolute; bottom: 100px; right:220px;">
           <m-btn class="fadeInUp" :text="$lang.value.skip"  @click.native="next"></m-btn>
        </div>
        <div style="position: absolute;bottom: 100px; left:220px;">
            <m-btn v-if="position===1" class="fadeInUp" @click.native="position=0" :text="$lang.value.back" :text-left="true"></m-btn>
        </div>
    </div>
</template>

<script>
    import Lect1 from './Lect1'
    import Lect2 from './Lect2'

    export default {
        props: ['items'],
        components: {
            Lect1,
            Lect2
        },
        data() {
            return {
                position: 0
            }
        },
        methods: {
            next(e) {
                if (this.position === 1) {
                    this.$router.push({name: 'game', params: {gameId: +this.$route.params.gameId + 1}})
                    return
                }
                this.position++;
            }
        }
    }
</script>

<style>
    .lect-title {
        font-size: 30px;
        line-height: 1.2em;
    }

    .lect-text {
        font-size: 26px;
        line-height: 1.2em;
    }

    .text-container {
        padding: 35px;
        width: 1165px;
        height: 220px;
        position: absolute;
        left: 220px;
        bottom: 210px;
    }
</style>