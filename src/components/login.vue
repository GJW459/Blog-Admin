<template>

    <div class="login-container">
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar-box">
                <img src="../assets/logo.jpg" alt="">
            </div>
            <!--登录表单区域-->
            <el-form ref='dataFormRef' :model="dataForm" :rules="dataRule" status-icon class="loginForm"
                     @keyup.enter="dataFormSubmit">

                <!--用户名-->
                <el-form-item prop="username">
                    <el-input v-model="dataForm.username" prefix-icon="el-icon-user-solid" placeholder="用户名"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input v-model="dataForm.password" prefix-icon="el-icon-edit" placeholder="密码"
                              type="password"></el-input>
                </el-form-item>
                <!--按钮区域-->
                <el-form-item>
                    <el-button type="primary" @click="dataFormSubmit">登录</el-button>
                    <el-button type="info" @click="dataFormReset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {

                dataForm: {
                    username: '',
                    password: ''
                },
                dataRule: {
                    //数据校验规则 验证是否符合规则
                    username: [{
                        required: true,
                        message: '账号不能为空',
                        trigger: 'blur'
                    },
                        {
                            min:3,max:10,message: '账号长度在3到10之间',trigger: 'blur'
                        }
                    ],
                    password: [{
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    },
                        {
                            min:6,max:15,message: '密码长度在6到15之间',trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {

            //提交表单 登录
            dataFormSubmit() {

                //todo 登录代码逻辑待完善
                //预校验表单数据
                this.$refs.dataFormRef.validate(valid=>{
                    if (!valid) return//false是返回
                    if (this.dataForm.username=='gjw459'&&this.dataForm.password=='123456'){
                        console.log("登录成功")
                        return this.$message.success("登录成功")
                    }else {
                        return this.$message.error("登录失败")
                    }
                })
                /*
                * 前后端通过token
                * */
            },
            dataFormReset(){
                console.log(this)
                /*获得表单引用对象*/
                this.$refs.dataFormRef.resetFields()
            }
        }
    }
</script>

<style lang="less" scoped>
    .login-container {
        background-color: #2b4b6b;
        height: 100%;
    }

    .login_box {

        position: absolute;
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        /*less 语法*/

        .avatar-box {

            height: 100px;
            width: 100px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #eee;

            img {

                /*父盒子的100%*/
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }

    .loginForm {

        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
</style>