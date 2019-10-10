<template>
  <div class="modal--wrapper">
    <div class="modal--content">
      <!-- Start: Header -->
      <app-header />
      <!-- End: Header -->
      <!-- Start: Main -->
      <!-- End: Main -->
      <!-- Start: Footer -->
      <!-- End: Footer -->
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/header";
export default {
  components: {
    AppHeader
  }
};
</script>

<style scoped></style>
