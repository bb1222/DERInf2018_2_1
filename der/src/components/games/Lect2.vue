<template>
    <div>

        <img class="fadeIn" src="assets/lect/2/comp.png" alt="" style="position: absolute;left: 405px;top: 250px;">

        <img style="position: absolute;left: 25px;top: 140px; opacity: 0;" v-apparate:fadeIn="{delay:700}" src="assets/lect/2/k1.jpg" alt="">
        <img style="position: absolute;left: 25px;top: 440px; opacity: 0;" v-apparate:fadeIn="{delay:1400}" src="assets/lect/2/k2.jpg" alt="">
        <img style="position: absolute;right: 25px;top: 140px; opacity: 0;" v-apparate:fadeIn="{delay:2100}" src="assets/lect/2/k3.jpg" alt="">
        <img style="position: absolute;right: 25px;top: 440px; opacity: 0;" v-apparate:fadeIn="{delay:2800}" src="assets/lect/2/k4.jpg" alt="">

        <h1 v-apparate:fadeIn="{delay:700}" class="menu1" style="left: 215px;top: 370px;">{{menus[0]}}</h1>
        <h1 v-apparate:fadeIn="{delay:1400}" class="menu1" style="left: 200px;top: 670px;">{{menus[1]}}</h1>
        <h1 v-apparate:fadeIn="{delay:2100}" class="menu1" style="left: 1105px;top: 370px;">{{menus[2]}}</h1>
        <h1 v-apparate:fadeIn="{delay:2800}" class="menu1" style="left: 1225px;top: 670px;">{{menus[3]}}</h1>
    </div>
</template>

<script>
    export default {
        computed: {
            menus() {
                return this.$parent.$props.items.parts[1].points
            }
        }
    }
</script>

<style>
    .menu1 {
        position: fixed;
        opacity: 0;
        font-size: 32px;
        padding: 3px 16px;
    }
</style>