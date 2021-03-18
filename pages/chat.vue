<template>
  <div class="mainwrap">
      <div class="chatwrap">
          <div class="textarea">
            <b-list-group>
                <b-list-group-item variant="light" v-for="(message,index) in messages"
                :key="index"
                >
                  {{message.time}}|
                  <span style="font-weight: 900">{{message.username}}</span>: 
                  <span >{{message.text}}</span>
                </b-list-group-item>
            </b-list-group>   
          </div>
          <div class="input">
            <b-form-input 
              type="text" 
              id="myInput" 
              v-model="textMessage" 
              autofocus 
              ></b-form-input>
            <b-button variant="dark" id="myBtn" @click="sendMessage">Отправить</b-button>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
        username:"",
        visible:false,
        messages:[],
        textMessage:"",


    }
  },
  methods:{
  },
  computed:{

  },
  updated: function () {
    this.$nextTick(function () {
      var myDiv = document.querySelector(".textarea")
      myDiv.scrollTop = myDiv.scrollHeight 
    })
  },
  mounted: function () {
    },

}
</script>

<style>
    .mainwrap{
      padding: 10px;
      display: flex;
      height: calc(100vh - 340px);
      justify-content: space-between;
        
    }
    .chatwrap{
      display: flex;
      flex-direction: column;
      height: 100%;
      flex-grow: 1;
    }
    .textarea{
      overflow: auto; 
      margin-bottom: 10px;
      flex-grow: 1;
      padding-bottom:10px ;

    }
    .input{
      display: flex;
      justify-content: space-between;
    }
    .input input{
      flex-grow: 0.99;
    }
</style>