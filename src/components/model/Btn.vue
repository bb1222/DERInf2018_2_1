<template>
    <v-btn class="button-app ma-0 mblack-bg"
           :style="{textAlign: textLeft ? 'left':'right'}"
           dark large>
        <span style="width: 100%;">{{text}}</span>
    </v-btn>
</template>

<script>
    export default {
        props: ['text', 'textLeft'],
    }
</script>

<style>
    .button-app {
        width: 510px;
        /*width: 100%;*/
        min-height: 65px;
        font-size: 24px;
        text-align: right;
    }
</style>