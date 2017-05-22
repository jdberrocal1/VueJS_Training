<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>And my name is: {{name}}</p>
        <button @click="changeName">Change My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name"
                    :age="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :name="name"
                    :age="age"
                    @nameWasChanged="updateNameFromChild($event)"
                    @updateUserAge="updateAgeFromChild($event)"
                    :restoreName="restoreName">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Daniel',
                age: 25
            }
        },
        methods: {
            changeName() {
                this.name = 'Jose';
            },
            updateNameFromChild(name) {
                this.name = name;
            },
            updateAgeFromChild(age) {
                this.age = age;
            },
            restoreName() {
                this.name = 'Daniel';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
