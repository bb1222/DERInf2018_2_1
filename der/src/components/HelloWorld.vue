<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row align-center>
        <v-flex xs6>
          <p class="display-4">display-4</p>
          <p class="display-3">display-3</p>
          <p class="display-2">display-2</p>
          <p class="display-1">display-1</p>
          <p class="headline">headline</p>
          <p class="title">title</p>
          <p class="subheading">subheading</p>
          <p class="body-2">body-2</p>
          <p class="body-1">body-1</p>
          <p class="caption">caption</p>

          <!--<img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">-->
          <blockquote>
            &#8220;First, solve the problem. Then, write the code.&#8221;
            <footer>
              <small>
                <em>&mdash;John Johnson</em>
              </small>
            </footer>
          </blockquote>
        </v-flex>
        <v-flex xs6>
          <v-layout row wrap>
            <v-flex xs12 sm6><span>Light Theme</span>
              <v-card height="185px" flat color="white">
                <v-card-text>
                  <div>
                    <v-btn flat>Normal</v-btn>
                  </div>
                  <div>
                    <v-btn flat color="primary">Primary</v-btn>
                  </div>
                  <div>
                    <v-btn flat disabled>Disabled</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6><span>Dark Theme</span>
              <v-card height="185px" flat color="secondary">
                <v-card-text>
                  <div>
                    <v-btn flat classs="blue-grey" dark>Normal</v-btn>
                  </div>
                  <div>
                    <v-btn flat dark color="primary">Primary</v-btn>
                  </div>
                  <div>
                    <v-btn flat dark disabled>Disabled</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 sm6><span>Raised Light Theme</span>
              <v-card height="185px" flat color="white">
                <v-card-text>
                  <div>
                    <v-btn color="primary">Primary</v-btn>
                  </div>
                  <div>
                    <v-btn color="error">Error</v-btn>
                  </div>
                  <div>
                    <v-btn light disabled>Disabled</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6><span>Raised Dark Theme</span>
              <v-card height="185px" flat color="secondary">
                <v-card-text>
                  <div>
                    <v-btn color="grey darken-2" style="border-radius: 0;" dark>Primary</v-btn>
                  </div>
                  <div>
                    <v-btn color="error" dark>Error</v-btn>
                  </div>
                  <div>
                    <v-btn color="success" dark>Disabled</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

          <div class="text-xs-center">
            <v-btn fab dark small color="primary">
              <v-icon dark>remove</v-icon>
            </v-btn>
            <v-btn fab dark small color="pink">
              <v-icon dark>favorite</v-icon>
            </v-btn>
            <v-btn fab dark color="indigo">
              <v-icon dark>add</v-icon>
            </v-btn>
            <v-btn fab dark color="teal">
              <v-icon dark>list</v-icon>
            </v-btn>
            <v-btn fab dark large color="cyan">
              <v-icon dark>edit</v-icon>
            </v-btn>
            <v-btn fab dark large color="purple">
              <v-icon dark>android</v-icon>
            </v-btn>
          </div>

          <div class="text-xs-center">
            <v-btn
              color="secondary"
              @click.native="loader = 'loading'"
            >
              Accept Terms
            </v-btn>

            <v-btn
              @click.native="loader = 'loading3'"
              color="blue-grey"
              class="white--text"
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>

            <v-btn
              color="success"
              @click.native="loader = 'loading2'"
            >
              Custom Loader
              <span slot="loader">Loading...</span>
            </v-btn>

            <v-btn
              color="info"
              @click.native="loader = 'loading4'"
            >
              Icon Loader
              <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
            </v-btn>
          </div>

          <v-layout row wrap>
            <v-flex xs12 sm6>
              <div class="text-xs-center">
                <v-card flat>
                  <v-card-text>
                    <div>
                      <v-btn small color="primary" dark>Small Button</v-btn>
                    </div>
                    <div>
                      <v-btn color="warning" dark>Normal Button</v-btn>
                    </div>
                    <div>
                      <v-btn color="error" dark large>Large Button</v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-flex>
            <v-flex xs12 sm6>
              <div class="text-xs-center">
                <v-card flat>
                  <v-card-text>
                    <div>
                      <v-btn color="primary" fab small dark>
                        <v-icon>edit</v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn color="warning" fab dark>
                        <v-icon>account_circle</v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn color="error" fab large dark>
                        <v-icon>alarm</v-icon>
                      </v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
