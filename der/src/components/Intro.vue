<template>
    <div class="bg" style="background-image: url('assets/intro/bg1_blur.jpg');">


        <div class="phone" v-apparate:fadeInDown="{delay:0}">
            <img src="assets/intro/phone.png" alt="">
            <label style="position: absolute;left: 460px;top: 520px;font-family: AppFont500; max-width:680px;"
                   class="display-1">
                <span class="cursor-anim">|</span>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {}
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
        margin-left: 330px;
        width: 927px;
        height: 1176px;
    }
</style>