<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Add Food Size Option" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <label for="name">Size Name</label>
                                        <input v-model="model.name" id="name" name="name" type="text"
                                               required autofocus placeholder="Size Name" class="form-control"/>
                                        <field-messages name="name" show="$invalid && $submitted"
                                                        class="text-danger">
                                            <div slot="required">Size Name is required</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12" v-show="show_error">
                                    <ul>
                                        <li v-for="error in validationErrors" class="text-danger">{{error[0]}}</li>
                                    </ul>
                                </div>
                                <div class="col-sm-12" v-show="show_success">
                                    <ul>
                                        <li class="text-success">Amount Option added successfully</li>
                                    </ul>
                                </div>

                                <div class="col-lg-12">
                                    <div class="col-md-offset-4 col-md-8 m-t-25">
                                        <button type="submit" class="btn btn-primary">Submit
                                        </button>
                                        <button type="reset" class="btn btn-effect-ripple btn-secondary  reset_btn1"
                                                @click="form_reset">
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "restaurant_src/validations/validations.js";
    import ApiService from "restaurant_resources/common/api.service";
    import AdminApiService from "common/api.service";


    // My own made elements.
    import ImageInput from 'pages/ImageInput';


    Vue.use(VueForm, options);
    export default {
        name: "edit_size",
        data() {
            return {
                formstate: {},

                model: {
                    name: "",
                    size_id:""
                },
                show_error:false,
                show_success:false,
                validationErrors:[],
                restaurant_id:0,
                api_service:ApiService
            }
        },
        methods: {
            onSubmit: function () {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    this.api_service.post('restaurant/update_size', this.model)
                        .then(data => {
                            if (!data.data.error){  // if category added
                                this.show_error = false;
                                this.show_success = true;
                            }
                            else{
                                this.validationErrors = data.data.error;
                                this.show_error = true;
                                this.show_success = false;
                                throw new Error('handled');
                            }
                        })
                        .then(() => {
                            setTimeout(()=>{
                                this.$router.push("/size_list"+(this.restaurant_id!=0 ? `/${this.restaurant_id}` : ''))
                            },500);
                        })
                        .catch(error => {

                        })
                }
            },
            form_reset() {
                this.model = {
                    name: "",
                };
            },
            getQuantityInfo() {
                var add_restaurant_id='';
                let api_service=ApiService;
                if(this.$route.params.restaurant_id)
                {
                    this.restaurant_id=this.$route.params.restaurant_id;
                    add_restaurant_id="/"+this.restaurant_id;
                    api_service=AdminApiService;
                    this.api_service=api_service;
                }
                api_service.get('restaurant/get_size/' + this.model.size_id)
                    .then(response => {
                        this.model.name = response.data.name;
                    })
            },

        },
        components: {
            ImageInput:ImageInput
        },
        beforeMount() {
            this.model.size_id = this.$route.params.size_id;
            this.getQuantityInfo();
        },
        mounted: function () {

        },
        destroyed: function () {

        }
    }
</script>
<style scoped>
    .dropzone_wrapper {
        width: 100%;
    }

    .align-left {
        float: left;
    }

    .align-right {
        float: right;
    }
</style>
