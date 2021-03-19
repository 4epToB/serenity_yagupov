<template>
  <div class="mainwrap">
      <div class="chatwrap">
          <div class="textarea">
<!--             <span>{{messages}}</span> -->
            <b-list-group>
                <b-list-group-item variant="light" v-for="(message,index) in messages"
                :key="index"
                >
                  {{message.time}}|
                  <span style="font-weight: 900">{{message.name}}</span>: 
                  <span >{{message.message}}</span>
                </b-list-group-item>
            </b-list-group>   
          </div>
          <div class="input">
            <b-form-input 
              type="text" 
              id="myInput" 
              v-model="message" 
              autofocus 
              ></b-form-input>
            <b-button variant="dark" id="myBtn" @click="send">Отправить</b-button>
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
        message:"",


    }
  },
  methods:{
    async send(){
      const requestOptions = {
        headers: { "Content-Type": "application/json" },
        /* body: JSON.stringify({ username: 'example',message : 'this.message'}) */
      };
      const response = await this.$axios.post('/my-api/', JSON.stringify({ username: 'example',message : 'this.message'}),requestOptions)
      /* this.messages = response */
      /* const data = await response.json();  */ 

    }
  },
  computed:{

  },
  updated() {
    this.$nextTick(function () {
      var myDiv = document.querySelector(".textarea")
      myDiv.scrollTop = myDiv.scrollHeight 
    })
  },
  /* async beforeMount() {
    const messages = await this.$axios.$get('http://localhost:3000/messages')
    this.messages = messages
  }, */

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