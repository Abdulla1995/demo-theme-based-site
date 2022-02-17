<template>
  <div id="app" class="main" :class="[ darkMode ? 'dark-mode' : 'default' ]">

    <label for="mode-change" class="c-pointer">
      <input id="mode-change" type="checkbox" @change="changeTheme">
      <span class="text-dark">Toggle / {{ darkMode ? 'Dark' : 'Light'}}</span>
    </label>

    <ProfileInfo />
    <Links />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ProfileInfo from "@/components/ProfileInfo";
import Links from "@/components/Links";

export default {
  name: 'App',
  components: {
    Links,
    ProfileInfo
  },

  data() {
    return { }
  },

  computed: {
    ...mapState([
        'darkMode'
    ]),
  },

  methods: {
    ...mapMutations(['TOGGLE_DARK_MODE']),

    changeTheme() {
      this.TOGGLE_DARK_MODE();
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
