<template>
  <div class="mainwrap">
      <div class="chatwrap">
          <div class="textarea">
            <b-list-group>
                <b-list-group-item variant="light" v-for="(message,index) in messages"
                :key="index"
                >
                  <span style="font-weight: 900">{{message.username}}</span>:
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
<<<<<<< HEAD
      if(this.message){
        const requestOptions = {
          headers: { "Content-Type": "application/json" },
        };
        const response = await this.$axios.post('/messages', JSON.stringify({ username: this.username ,message : this.message}),requestOptions)
        this.message=''
      } else{
        alert('Введите сообщение')
      }
=======
      const requestOptions = {
        headers: { "Content-Type": "application/json" },
      };
      const response = await this.$axios.post('/messages', JSON.stringify({ username: this.username ,message : this.message}),requestOptions)
      this.message=''
      console.log(response.data)
      /* this.messages.push(response.data) */

>>>>>>> ccaca7a3c6fe85441b582a440878d9444fb5e8d9
    },
    async refresh(){
      const messages = await this.$axios.$get('/messages')
      this.messages = messages
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
  created() {
    this.username=this.$route.params.username
    setInterval(function () {
			this.refresh()
		}.bind(this), 1500)



  },
  mounted(){
    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
      }
    });
  }

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
