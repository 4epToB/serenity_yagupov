<template>
  <div>
    <div class="reg" v-if="!visible">
      <div class="line">
        <label for="text-name">Имя</label>
        <b-form-input v-model="username" id="text-name" placeholder="Введите Ваше имя" ></b-form-input>
      </div>
      <div class="buttonwrap">
        <b-button @click="login" variant="success">Вход</b-button>
      </div>

    </div>    
  </div>
</template>

<script>
export default {
  data: function () {
    return {
        username:"",
        visible:false

    }
  },
  methods:{
    login(){
          this.visible=!this.visible
          this.$router.push('/chat')
    },
  }

}
</script>

<style>
  .reg{
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border:2px solid #6a89cc;
    background-color:#38ada9 ;
    border-radius:20px;
    padding:20px;
    margin:150px auto
  }
  .line{
    width: 206px;
    height: 70px;
  }
  .line input{
    width: 206px;
    height: 30px;
  }
  .buttonwrap{
    height: 40px;
    display: flex;
    justify-content: center;
  }
</style>
