<template>
  <h3 class="m-4">Repo Org Information</h3>
  <div class="board-panel m-3">
    <div>
      <!-- buttons -->
      <div class="d-flex justify-content-start">
        <div
          class="tabBtn"
          @click="focusBtn('RespID')"
          :class="{ selectedbtn: isActive.RespID }"
        >
          Resp Org ID
        </div>
        <div
          class="tabBtn"
          @click="focusBtn('RespEntity')"
          :class="{ selectedbtn: isActive.RespEntity }"
        >
          Resp Org Entity
        </div>
        <div
          class="tabBtn"
          @click="focusBtn('TollNumber')"
          :class="{ selectedbtn: isActive.TollNumber }"
        >
          Toll-free Number
        </div>
      </div>
      <!-- buttons -->
      <!-- contents -->
      <div class="borderbox">
        <div class="m-3" v-if="isActive.RespID">
          <Dropdown
            v-model="selectTab.selectedOrgID"
            :options="selectTab.orgID"
            optionLabel="respOrgId"
            placeholder="Resp Org ID"
            class="w-full md:w-14rem w-100"
          />
        </div>
        <div class="m-3" v-if="isActive.RespEntity">
          <Dropdown
            v-model="selectTab.selectedEntities"
            :options="selectTab.entity"
            optionLabel="respOrgEntity"
            placeholder="Resp Org Entity"
            class="w-full md:w-14rem w-100"
          />
        </div>
        <div class="m-3" v-if="isActive.TollNumber">
          <Dropdown
            v-model="selectTab.selectedTollNumber"
            :options="selectTab.tollNumber"
            optionLabel=""
            placeholder="Toll-free Number"
            class="w-full md:w-14rem w-100"
          />
        </div>
        <div class="m-2 d-flex justify-content-end">
          <MDBBtn
            @click="retrieve"
            color="light"
            class="fs-5 d-flex align-items-center text-primary"
            ><i class="pi pi-search mx-2"></i>Retrieve</MDBBtn
          >
        </div>
      </div>
    </div>
  </div>
  <div class="board-panel m-3">
    <div class="board-panel shadow-2 m-3">
      <div class="border-bottom border-secondary">
        <h3>Entity information</h3>
      </div>
      <div>
        <MDBTable>
          <thead>
            <tr>
              <th>Entity ID</th>
              <th>Company Name</th>
              <th>Contact Number</th>
              <th>E-mail Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ forTableData.infor.respOrgEntity }}</td>
              <td>{{ forTableData.infor.companyName }}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </MDBTable>
      </div>
    </div>
    <div class="board-panel shadow-2 m-3">
      <div class="border-bottom border-secondary">
        <h3>Resp Org List</h3>
      </div>
      <div>
        <MDBTable>
          <thead>
            <tr>
              <th>Resp Org ID</th>
              <th>Business Unit Name</th>
              <th>Trouble Referral Number</th>
              <th>Primary E-mail</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody v-for="(obj, key) in forTableData.list" :key="key">
            <tr>
              <td>{{ obj.respOrgId }}</td>
              <td>{{ obj.businessUnitName }}</td>
              <td>
                {{
                  "(" +
                  obj.troubleRef.slice(0, 3) +
                  ")" +
                  obj.troubleRef.slice(3, 6) +
                  "-" +
                  obj.troubleRef.slice(6, 10)
                }}
              </td>
              <td>{{ forTableData.infor.emailId }}</td>
              <td>{{ obj.status }}</td>
            </tr>
          </tbody>
        </MDBTable>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from "vue";
import Dropdown from "primevue/dropdown";
import { MDBBtn, MDBTable } from "mdb-vue-ui-kit";
export default {
  components: {
    Dropdown,
    MDBTable,
    MDBBtn
},
  setup() {
    const forTableData = reactive({
      infor:[],
      list:[]
    });
    const selectTab = reactive({
      selectedOrgID: null,
      orgID: [],
      selectedEntities: null,
      entity: [],
      selectedTollNumber: null,
      tollNumber: []
    });
    const focusBtn = (select) => {
      isActive.RespID = false;
      isActive.RespEntity = false;
      isActive.TollNumber = false;
      isActive[select] = true;
    };

    const isActive = reactive({
      RespID: true,
      RespEntity: false,
      TollNumber: false,
    });
    onMounted(()=>{
      const token = window.localStorage.getItem("token");
      const request = {
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      };

      fetch("https://tmsdev.tfnms.com:3000/api/v1/resp_org/units",request)
      .then(res =>res.json())
      .then(res =>{
         console.log(res)
         selectTab.orgID = res;
        })
      fetch("https://tmsdev.tfnms.com:3000/api/v1/resp_org/entities",request)
      .then(res =>res.json())
      .then(res => {
        console.log(res)
        selectTab.entity = res;
      })
    });
    const retrieve = ()=>{
      const token = window.localStorage.getItem("token");
      let request = {
            method:"GET",
            headers:{
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token
            }
          }

          // console.log(selectTab.selectedOrgID.respOrgId);
        if(isActive.RespID){

          fetch("https://tmsdev.tfnms.com:3000/api/v1/resp_org/retrieve/unit?value=" + selectTab.selectedOrgID.respOrgId , request)
          .then(res =>res.json())
          .then(res=>{
            console.log(res)
            forTableData.infor = res;
            let middle = JSON.stringify(res.associatedRespOrgs);
            forTableData.list = JSON.parse(middle);
            // console.log(forTableData.list[0].status)
          })
          }else if(isActive.RespEntity){
          fetch("https://tmsdev.tfnms.com:3000/api/v1/resp_org/retrieve/entity?value=" + selectTab.selectedEntities.respOrgEntity , request)
          .then(res =>res.json())
          .then(res=>{
            console.log(res)
            forTableData.infor = res;
            let middle = JSON.stringify(res.associatedRespOrgs);
            forTableData.list = JSON.parse(middle);
            // console.log(forTableData.list[0].status)

          })
    }
  };
    
  return {
      isActive,
      focusBtn,
      selectTab,
      retrieve,
      forTableData
    }
  }
  };
</script>
<style scoped lang="css">
.board-panel {
  padding: 20px;
  border: 1px solid rgb(205, 203, 203);
  border-radius: 10px;
}
.tabBtn {
  cursor: pointer;
  transition: ease-in;
  transition-duration: 0.2s;
  padding: 10px 30px;
  color: darkblue;
  border-bottom: 2px solid rgb(216, 215, 215);
}
.selectedbtn {
  border-color: darkblue;
}
.borderbox {
  border-top: 1px solid rgb(216, 215, 215);
  padding: 30px;
}
</style>
