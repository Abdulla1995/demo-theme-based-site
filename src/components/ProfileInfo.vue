<template>
  <div class="profile-info">
    <img v-show="$store.state.darkMode"
         src="@/assets/images/profile-empty.svg"
         alt="empty image"
         class="profile-info_empty-image">
    <div v-show="!$store.state.darkMode"
         class="profile-info_image"></div>

    <h3 class="profile-info_name">@Abdulla</h3>
    <h4 class="profile-info_adlinks">Adlinks</h4>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
.profile-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  $textFontSize: 0.80em;
  &_empty-image{
    height: 100px;
    width: 100px;
  }

  &_image {
    height: 100px;
    width: 100px;
    background-image: url("~@/assets/images/profile-image.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 1px solid var(--dark);
  }

  &_name{
    color: var(--dark);
    margin-top: 15px;
    margin-bottom: 0;
    font-size: $textFontSize;
  }

  &_adlinks{
    color: var(--dark);
    margin-top: 5px;
    font-size: $textFontSize;
  }
}
</style>