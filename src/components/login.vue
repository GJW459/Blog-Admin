<template>
    <div class="login-wrapper">
        <div class="login-content">
            <div class="login-main">
                <h2 class="login-main-title">管理员登录</h2>
                <el-form @keyup.enter="dataFormSubmit()" :model="dataForm" ref="dataForm" :rules="dataRule" status-icon>
                    <el-form-item prop="userName">
                        <el-input v-model="dataForm.userName" placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="dataForm.password" placeholder="密码" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="dataFormSubmit()" class="login-btn-submit" type="primary">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{

                dataForm:{
                    userName:'',
                    password:''
                },
                dataRule:{
                    //数据校验规则
                    userName: [{
                        required:true,
                        message:'账号不能为空',
                        trigger:'blur'
                    }],
                    password:[{
                        required:true,
                        message:'密码不能为空',
                        trigger:'blur'
                    }]
                }
            }
        },
        methods:{

            //提交表单
            dataFormSubmit(){

                //todo 登录代码逻辑待完善
                alert("登录代码逻辑待完善")
                this.$router.replace({name:'Home'})
            }
        }
    }
</script>

<style scoped>

    .login-wrapper{

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        background-color: rgba(38,50,56,0.6);
        background: url("../assets/bgimg.jpg") no-repeat;
        background-size: 100% 100%;

    }
    .login-content{

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        height: 300px;
        width: 400px;
        background-color: #112234;
        /*透明度为0.8*/
        opacity: 0.8;

    }
    .login-main{
        color: beige;
        padding: 20px 20px 10px 20px;
    }
</style>