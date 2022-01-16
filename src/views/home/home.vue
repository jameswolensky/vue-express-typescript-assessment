<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="10">
          <v-card height="80vh" class="home-card">
            <v-card-text>
              <component :is="component_to_render" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>

<style lang="scss" scoped>
  .home-card {
    overflow-y: scroll;
    margin-top:10vh
  }
</style>
