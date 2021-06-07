<template>
  <div class="top-operation">
    <div class="info">
      <div class="one">
        <p>
          <span>28</span>
          <span>台</span>
        </p>
        <p>设备总数</p>
      </div>
      <div class="two">
        <p>
          <span class="green">22</span>
          <span>台</span>
        </p>
        <p>正常设备</p>
      </div>
      <div class="three">
        <p>
          <span class="orange">2</span>
          <span>台</span>
        </p>
        <p>异常设备</p>
      </div>
      <div class="four">
        <p>
          <span class="gray">4</span>
          <span>台</span>
        </p>
        <p>离线设备</p>
      </div>
    </div>
    <div class="input">
      <el-input class="i i1" placeholder="填写名称或编码" v-model="name"></el-input>
      <el-select class="i i2" v-model="group">
        <el-option value="1" label="全部分组"></el-option>
        <el-option value="2" label="Perfect分组"></el-option>
        <el-option value="3" label="Nice分组"></el-option>
      </el-select>
    </div>
    <div class="button">
      <button class="btn1">批量导入设备</button>
      <button class="btn2" @click="$parent.$emit('addDevice')">新增设备</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'top-operation',
  data(){
    return{
      name: '',
      group: '1',
    }
  }
}
</script>

<style lang='scss' scoped>
  .top-operation{
    height: 100%;
    /* background-color: skyblue; */
    display: flex;
    
  }

  .info{
    flex: 475;
    margin-right: 20px;
    /* background-color: brown; */

    &>div{
      display: inline-block;
      width: 110px;
      height: 100%;
      background-color: #FFFFFF;
      border: 1px solid #E8E8E8;
      border-radius: 8px;
      padding:5px 0 5px 20px;
      cursor: pointer;

      p{
        font-size: 12px;
        color: #A6A6A6;
        span{
          &:first-child{
            font-size: 20px;
            color: #333333;
            font-weight: bold;
          }
          &:last-child{
            font-size: 12px;
            color: #333;
            font-weight: bold;
            margin-left: 2px;
          }
        }
      }
    }

    div+div{
      margin-left: 8px;
    }
    

    .green, .orange, .gray{
        position: relative;
        padding-left: 10px;
        &::before{
          position: absolute;
          content: '';
          width: 8px;
          height: 8px;
          /* background-color: #00D9DB; */
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          left: -1px;
          /* transform: translate(-50%, -50%); */
        }
      }

      .green{
        &::before{  
          background-color: #00D9DB;   
        }
      }

      .orange{
        &::before{  
          background-color: #FB9400;   
        }
      }

      .gray{
        &::before{
          background-color: #A6A6A6;
        }
      }
    
  }



  .input{
    flex: 340;
    margin-right: 70px;
    /* background-color: brown; */
    display: flex;
    align-items: center;
    .i{
      height: 36px;
      font-size: 14px;
      color: #333333;
      outline: none;
    }

    .i1{
      width: 200px;
      margin-right: 20px;
    }

    .i2{
      width: 120px;
    }

  }

  .button{
    flex: 208;
    /* background-color: brown; */
    display: flex;
    align-items: center;

    button{
      width: 100px;
      height: 36px;
      border-radius: 4px;
      background-color: #00DDBB;
      font-size: 14px;
      color: #FFFFFF;
      border: none;
      outline: none;
      cursor: pointer;
      &:first-child{
        margin-right: 8px;
      }

      &:hover{
        opacity: .8;
      }
    }

  }
</style>