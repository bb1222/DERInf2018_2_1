<template>
    <v-layout row justify-center align-center text-xs-center>
        <!--<v-flex xs12>-->
        <v-card dark class="mt-5 pa-3 fadeIn" style="max-width: 950px; height: 460px; font-weight: 600;">
            <div class="pa-5">
                <p class="display-2" style="font-weight: 600;" v-html="$lang.value.title"></p>
                <p class="display-2" style="font-weight: 600;">{{$lang.value.grade}}</p>
            </div>
            <v-btn class="ma-0" color="warning" light style="width:100%; min-height:100px;" @click="start">
                <span class="display-2" style="font-weight: 700;">{{$lang.string.start}}</span>
            </v-btn>
           <div class="mt-4">
               <span class="grey--text">&copy; {{$lang.string.copyright}}</span>
               <a style="text-decoration: none;" class="light-blue--text" href="http://play.nis.edu.kz" target="_blank">play.nis.edu.kz</a>
           </div>
        </v-card>
        <!--</v-flex>-->
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            start() {
                this.$router.push({name: 'main'})
            }
        }
    }
</script>