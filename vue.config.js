module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // set variables globally accessible.
        additionalData: `@import "@/assets/styles/_variables.scss";`
      }
    }
  }
}