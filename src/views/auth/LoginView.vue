<script>
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-vue-ui-kit';
    import { ref } from 'vue';
    
    export default {
        components: {
            MDBContainer,
            MDBInput,
            MDBBtn
        },
        methods:{
        checkForm(){
            // this.$emit("submit",this.form)
            alert(this.email);
        }
    },

    setup() {
        
        const email = ref('');
        const password = ref('');

        return {
            
            email,
            password
        };
        }
    }
</script>

<template>
    <MDBContainer>
        <div class="text-center" style="padding-top: 100px;">
            <h2 class="p-4">Login</h2>
            <form class="g-4 needs-validation" novaildate @submit.prevent="checkForm">
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
            <div class="d-grid col-6 mx-auto m-4">
                <MDBBtn class="m-2" type="submit" color="success" size="lg" rounded >Login</MDBBtn>
                </div>
            </form>
            <div class="d-grid col-6 mx-auto m-4">
                <MDBBtn class="m-2" type="submit" color="dark" size="lg" rounded @click="$router.push('/register')" >Register</MDBBtn>
            </div>
                       
        </div>
    </MDBContainer>
</template>