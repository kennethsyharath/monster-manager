<template>
  <div>
    <hello-world msg="<3 Welcome to Vuetify Yo!!! <3"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator"
import HelloWorld from "../components/HelloWorld.vue";
import store from "@/store/index";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
