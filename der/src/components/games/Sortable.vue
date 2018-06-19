<template>
    <div class="pb-5 mb-5">
        <v-layout row wrap>
            <v-flex xs3 md4 offset-md1 lg3 offset-lg2 xl2 offset-xl3>
                <div style="height:100px" v-for="element in items.sorts">
                    <h5 style="height:80%" class="mt-1 pa-3 font700 grey lighten-3">{{element}}</h5>
                </div>
            </v-flex>
            <v-flex xs9 md6 lg5 xl4>
                <draggable v-model="values" :options="{group:'sort'}" @start="drag=true" @end="drag=false">
                    <div style="height:100px" v-for="(element,index) in values">
                        <v-card :class="[element == items.values[index] && clicked?'success':'primary']"
                                class="white--text elevation-8 title mr-5 mt-1 primary"
                                style="box-sizing: border-box; padding:10px; min-height:80px;">
                            {{element}}
                        </v-card>
                    </div>
                </draggable>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        props: ['items'],
        data() {
            return {
                values: [],
                mount: false,
                clicked: false,
                attempt: 0
            }
        },
        watch: {
            values(val) {
                if (this.clicked && this.compareArray(val, this.items.values)) {
                    let res = 100 + 20 - this.attempt * 10;
                    res=(res>100)?100:res;
                    res=(res<0)?0:res;
                    this.$router.push({
                        name: 'res',
                        params: {result: res, resId: this.$route.params.gameId}
                    });
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
        },
        components: {
            draggable
        },
    }
</script>