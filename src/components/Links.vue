<template>
  <div class="links-holder">
    <a href="#" v-for="a in 5" :key="a">Generated link {{ a }}</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.links-holder{
  a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    font-size: 1em;
    margin-bottom: 20px;
    height: 50px;
    background-color: var(--dark);
    color: var(--light);

    &:hover{
      background-color: var(--light);
      color: var(--dark);
      transition: all .3s;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
    }
  }
}
</style>