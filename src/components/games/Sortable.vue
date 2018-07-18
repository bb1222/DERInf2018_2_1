<template>
    <div class="bg" style="position: absolute;left: 0;top: 0;">
        <div style="position: absolute; top:320px; left:250px; width:1100px;">
            <h1 class="mblack-bg pa-3 mb-3">
                <span style="color:white;">{{items.task}}</span>
            </h1>
            <v-layout row>
                <v-flex xs3>
                    <div class="mb-2 mr-2"
                         :class="[correct ? 'light-green lighten-2':'']"
                         v-for="element in items.sorts">
                        <h1 style="height:100px; line-height: 1.3em;" class="pa-3 pr-5"
                            >
                            {{element}}
                        </h1>
                    </div>
                </v-flex>
                <v-flex xs9>
                    <draggable v-model="values" :options="{group:'sort'}" @start="drag=true" @end="drag=false">
                        <div style="height:100px" class="mb-2"
                             v-for="(element,index) in values">
                            <v-card flat
                                    :class="[correct ? 'light-green fadeIn':'grey lighten-3']"
                                    class="headline pa-4"
                                    style="padding:0; min-height:100px;">
                                {{element}}
                                <!--:class="[element == items.values[index] && clicked?'success':'primary']"-->
                            </v-card>
                        </div>
                    </draggable>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        props: ['items'],
        components: {
            draggable
        },
        data() {
            return {
                correct: false,
                values: [],
                mount: false,
                clicked: false,
                attempt: 0
            }
        },
        watch: {
            values(val) {
                if (this.clicked && this.compareArray(val, this.items.values)) {
                    this.$parent.$emit('game', true)
                    this.correct = true;
                    let gameOver = () => {
                        let res = 100 + 20 - this.attempt * 10;
                        res = (res > 100) ? 100 : res;
                        res = (res < 0) ? 0 : res;
                        this.$router.push({
                            name: 'res',
                            params: {result: res, resId: this.$route.params.gameId}
                        });
                    }
                    setTimeout(function () {
                        gameOver()
                    }, 2000)
                }
                if (this.clicked) {
                    this.attempt++;
                    return;
                }
                if (this.mount) this.clicked = true;
            }
        },
        created() {
            this.values = this.$parent.shuffle(this.items.values.slice());
        },
        mounted() {
            setTimeout(() => {
                this.mount = true;
            }, 500)
        },
        methods: {
            compareArray(arr1, arr2) {
                for (let i in arr1) {
                    if (arr1[i] != arr2[i]) return false;
                }
                return true;
            }
        }
    }
</script>