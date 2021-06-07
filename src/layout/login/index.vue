<template>
  <div class="login">
    <header>
      <img src="../../assets/imgs/LOGO01.png" alt="">
      <span>智能传输箱管理</span>
    </header>
    <main class="box">
      <div class="inner">
        <div class="left">
          <img src="../../assets/imgs/img02.png" alt="">
        </div>
        <div class="right">
          <p class="title1">登录</p>
          <p class="title2">核对好账号及密码后进行登录</p>
          <input type="text" placeholder="填写手机号" v-model="formData.username">
          <input type="password" placeholder="填写密码" v-model='formData.password'>
          <!-- <div class="validate"></div> -->
          <sliderValidate style="margin-top: 30px"></sliderValidate>
          <div class='login-btn' @click="login">登陆</div>
          <p class="forget">忘记密码 ></p>
        </div>
      </div>
    </main>
    <footer>
      深圳市宇泰科技公司技术支持
    </footer>
  </div>
</template>

<script>
  import sliderValidate from '../../components/sliderValidate/index'
  export default {
    name: "login",
    components: {sliderValidate},
    data(){
      return{
        formData: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login(){
        if(this.formData.username === '' || this.formData.password === ''){
          this.$message({type: 'error', message: '用户名或密码不能为空！', duration: 2000})
          return
        }
        sessionStorage.setItem('token', '203428340912783094182309')
        this.$router.push('/')
        this.$message({type: 'success', message: '登陆成功！', duration: 2000})
      }
    }
  }
</script>

<style scoped lang="scss">
  .login{
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #E0E7F2;
  }

  header{
    height: 94px;
    padding-top: 40px;
    img{
      vertical-align: middle;
      margin-left: 60px;
    }
    span{
      display: inline-block;
      font-size: 22px;
      font-weight: bold;
      vertical-align: middle;
      margin-left: 20px;
    }
  }

  main{
    flex: 1;
    /* text-align: center; */

    display: flex;
    height: 580px;
    /* flex子元素垂直居中 */
    align-items: center;
    /* flex子元素水平居中 */
    justify-content: center;

    .left{
      display: inline-block;
    }

    .right{
      display: inline-block;
      width: 420px;
      height: 513px;
      background-color: #FFFFFF;
      border-radius: 8px;
      /* margin-bottom: 34px; */

      padding: 0 48px 0 50px;
      vertical-align: top;
      margin-top: 34px;
    }

    .title1{
      line-height: 1;
      margin-top: 49px;
      font-size: 32px;
      font-weight: bold;
    }

    .title2{
      margin-top: 34px;
      line-height: 1;
      color: #A6A6A6;
      font-size: 16px;

    }

    input{
      display: block;
      width: 100%;
      height: 43px;
      line-height: 43px;
      outline: none;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #E8E8E8;
      margin-top: 25px;
      border-radius: 4px;
      /* background-color: transparent; */
    }

    input:-webkit-autofill{
      box-shadow: 0 0 1000px white inset !important;
    }



    ::placeholder{
      color: #A6A6A6;
    }

    .login-btn{
      background-color: #00DDBB;
      color: #FFFFFF;
      height: 48px;
      line-height: 48px;
      border-radius: 6px;
      font-size: 16px;
      text-align: center;
      margin-top: 40px;
      user-select: none;
      cursor: pointer;
      &:hover{
        opacity: .5;
      }
      &:active{
        transform: translate(1px, 1px);
      }
    }

    .forget{
      margin-top: 29px;
      line-height: 1;
      font-size: 16px;
      color: #666666;
      text-align: center;
      user-select: none;
      cursor: pointer;

    }
  }

  footer{
    height: 94px;
    font-size: 14px;
    color: #999999;
    line-height: 94px ;
    text-align: center;
    /*border: 1px solid #000;*/
  }
</style>