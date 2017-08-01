<template>
    <div class="container">
        <form name="dataForm">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                     <div class="form-group" :class="{'has-error': errors.has('email') }">
                        <label for="email">Mail</label>
                        <input
                                type="email"
                                id="email"
                                name="email"
                                class="form-control"
                                v-model="userData.email"
                                v-validate="{ rules: { required: true, email: true } }">
                                <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                    </div>
                    <div class="form-group" :class="{'has-error': errors.has('password') }">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                name="password"
                                class="form-control"
                                v-model="userData.password"
                                v-validate="{ rules: { required: true, min:8, max:16 } }">
                                <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>
                    <div class="form-group">
                        <label for="age">Date</label>
                        <input
                                type="date"
                                id="date"
                                class="form-control"
                                v-model="date">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="userData.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="userData.gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="prioritySelected">
                        <option v-for="priority in priorityOptions">{{priority}}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submit"
                            :disabled="isFormInvalid">
                                Submit!
                    </button> 
                </div>
            </div>
        </form>
        <hr>
        <transition name="fade">
            <div class="row" v-if="isDataSubmited">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Data</h4>
                        </div>
                        <div class="panel-body">
                            <p>Mail: {{userData.email}}</p>
                            <p>Password: {{userData.password}}</p>
                            <p>Age: {{userData.age}}</p>
                            <p>Date: {{date | formatDate}}</p>
                            
                            <p>Message: {{message}}</p>
                            <p><strong>Send Mail?</strong></p>
                            <ul>
                                <li v-for="mail in sendMail">{{mail}}</li>
                            </ul>
                            <p>Gender: {{userData.gender}}</p>
                            <p>Priority: {{prioritySelected}}</p>
                            <p>Switched: {{dataSwitch ? 'Yes':'No'}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Switch from './Switch.vue';
    export default {
        data(){
            return {
                userData: {
                    email: '',
                    password: '',
                    age: '',
                    gender:'Male'
                },
                date:'',
                message:'',
                sendMail:[],
                priorityOptions:['High','Medium','Low'],
                prioritySelected:'Low',
                dataSwitch: true,
                isDataSubmited: false                
            };
        },
        methods:{
            submit() {
                this.isDataSubmited = true;
            }
        },
        computed: {
            isFormInvalid() {
                return Object.keys(this.fields).filter(key => !this.fields[key].valid).length > 0;
            }
        },
        components:{
            appSwitch: Switch
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 0.5s;
    }

    .fade-leave {
        
    }

    .fade-leave-active {
        transition: opacity 0.5s;
        opacity: 0;
    }
</style>
