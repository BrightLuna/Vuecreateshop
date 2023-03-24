<script>
    import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-vue-ui-kit';
    import { ref } from 'vue';
    
    export default {
        components: {
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBRow,
    MDBCol
},
    methods:{
        checkForm(){
            // this.$emit("submit",this.form)
            alert("Adf")
        }
    },
    setup() {
        
        
        const firstname = ref('');
        const lastname = ref('');
        const email = ref('');
        const password = ref('');
        const repassword = ref('');

        return {
            firstname,
            lastname,
            email,
            password,
            repassword
        };
        }
    }
</script>

<template>
    <MDBContainer>
        <div class="text-center" style="padding-top: 50px;">
            <h2 class="p-4">Register</h2>
            <form class="g-4 needs-validation" novaildate @submit.prevent="checkForm">
                <MDBRow class="p-2">
                    <MDBCol md="6">
                        <MDBInput 
                        label="Please input your first name"
                        type="text"
                        size="lg"
                        v-model="firstname"
                        valid-feedback="looks good"
                        invalid-feedback="Please input your first name"
                        validation-event="input"
                        required
                        title="Must contain between 5 and 30 characters"
                        minLength="5"
                        maxLength="30"
                        />
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBInput 
                        label="Please input your last name"
                        type="text"
                        size="lg"
                        v-model="lastname"
                        valid-feedback="looks good"
                        invalid-feedback="Please input your last name"
                        validation-event="input"
                        required
                        title="Must contain between 5 and 30 characters"
                        minLength="5"
                        maxLength="30"
                        />
                    </MDBCol>
                </MDBRow>
                <div class="p-2">
                <MDBInput
                    class="m-4"
                    label="Please input your Email"
                    type="email"
                    size="lg"
                    v-model="email"
                    valid-feedback="Looks good"
                    invalid-feedback="Please provide your email"
                    validation-event="input"
                    required
                    title="Must contain @ characters"
                    minLength="5"
                    max-length="30"
                    />
                </div>
                <div class="p-2">
                    <MDBInput
                        class="m-4" 
                        label="Please input your password" 
                        type="password" 
                        size="lg"
                        v-model="password"
                        valid-feedback="looks good"
                        invalid-feedback="Please input your password"
                        validation-event="input"
                        required
                        title="Must contain over 5 characters"
                        minLength="5"
                        /> 
                </div>
                <div class="p-2">
                    <MDBInput
                        class="m-4" 
                        label="Please input your password again" 
                        type="password" 
                        size="lg"
                        v-model="repassword"
                        valid-feedback="looks good"
                        invalid-feedback="Please input your password again"
                        validation-event="input"
                        required
                        title="Must contain over 5 characters"
                        minLength="5"
                        /> 
                </div>
            <div class="d-grid col-6 mx-auto m-4">
                <MDBBtn type="submit" color="dark" size="lg" rounded >Register</MDBBtn>
            </div>
            </form>
            <div class="d-grid col-6 mx-auto m-4">
                <MDBBtn color="success" size="lg" rounded @click="$router.push('/')" >Login</MDBBtn>
            </div>
                       
        </div>
    </MDBContainer>
</template>