<template>
   <MDBNavbar
  container
  expand="lg"
  bg="light"
  class="d-flex "
  ><MDBNavbarNav>
    <MDBNavbarItem class="mx-4 my-2 fs-4">
      <i class="fas fa-bars"></i>
    </MDBNavbarItem>
    <MDBNavbarItem class="mx-4 my-2 fs-4 text-primary">
      <i class="fas fa-city"></i>
      <span class="mx-2">TMS</span>
    </MDBNavbarItem>
  </MDBNavbarNav>

    <form class="d-flex flex-row">
      <MDBNavbarItem
        class="me-3 d-flex align-items-center"
        linkClass="link-secondary"
        ><Dropdown
            v-model="selectedItem"
            :options="items"
            optionLabel="name"
            placeholder="Select"
            class="md:w-14rem w-100"
          /></MDBNavbarItem>
      <MDBNavbarItem class=" me-3 d-flex flex-row">
        <div>
          <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
          class="rounded-circle"
          height="44"
          alt=""
          loading="lazy"
        />
        </div>
        
        <div class="fs-6">
          <div>admin eda</div>
          <div>admin@admin.com</div>
        </div>
      </MDBNavbarItem>
    </form>
  </MDBNavbar>
  <HelloWorld/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "vue";
import {
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarNav,
} from "mdb-vue-ui-kit";

import Dropdown from "primevue/dropdown";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    Dropdown
}
,
    setup() {
      const selectedItem = ref();
    const items = ref([{name:"Resp Org ID"},{name: "Resp Org Entity"},{name: "Toll-free Number"}]);
      const collapse7 = ref(false);

      return {
        collapse7,selectedItem, items
      }
    }
};
</script>
<style scoped lang="css">
/* :deep(.p-dropdown){
} */
.my-select{
  background-color: aqua;
}
</style>