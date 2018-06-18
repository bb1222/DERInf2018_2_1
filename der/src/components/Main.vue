<template>
    <div>
        <v-layout row align-center justify-center class="mt-5">

            <loading-image class="pa-0 mr-5 mb-4" style="min-width: 695px; cursor: pointer;"
                           src="assets/vector/cover.jpg" @click.stop="start()"></loading-image>
            <div>
                <div v-for="(part,id) in $lang.value.parts" :key="id">
                    <maincard class="mb-4" :part="part" :id="id"></maincard>
                </div>
            </div>
        </v-layout>
    </div>
</template>

<script>
    import maincard from './model/CardMain.vue'

    export default {
        components: {
            maincard
        },
        data: () => ({
            images: Array(51).fill('https://unsplash.it/500?image=')
        }),
        methods: {
            start() {
                this.$router.push({name: 'main'})
            }
        }
    }
</script>

<style>
    .images {
        display: flex;
        flex-flow: row wrap;
    }
</style>