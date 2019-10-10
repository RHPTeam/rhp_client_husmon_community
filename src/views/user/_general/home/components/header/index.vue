<template>
  <div class="modal--header position_fixed">
    <div class="d_flex align_items_center">
      <!-- Start: Logo -->
      <div class="mr_auto logo">
        <!-- <icon-base
          class="icon--delete"
          icon-name="remove"
          width="20"
          height="20"
          viewBox="0 0 15 15"
        >
          <icon-logo />
        </icon-base> -->
        <img
          src="https://ttol.vietnamnetjsc.vn/images/2019/09/15/16/29/Linh-Ka-6.jpg"
          alt=""
        />
      </div>
      <!-- Start: Menu -->
      <div class="menu ml_auto">
        <nav>
          <ul class="p_0 m_0 d_flex align_items_center">
            <li><a href="#">Write</a></li>
            <li><a href="#" class="mx_5">Signin</a></li>
            <li><a href="#" class="get--started">Get Started</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.modal--header {
  height: 100px;
  top: 0;
  left: 0;
  width: 100vw;
  // Start: Logo
  .logo {
    img {
      height: 70px;
      width: 70px;
    }
  }
  // Start: Menu
  .menu {
    a {
      color: inherit;
      &:hover {
        text-decoration: none;
      }
    }
    .get--started {
      padding: 0.5rem 1rem;
      border-radius: 0.4rem;
      border: 1px solid #ccc;
    }
  }
}
</style>
