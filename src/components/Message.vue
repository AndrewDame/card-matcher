<template>
  <div 
      v-if="status"
      class="Message"> 
        <span 
          v-if="isSuccess && status"
          class="Message__success"
          >
          Success!
          <span class="Message__choices"> 
            <span class="Message__choice" @click="initializeGame()"> 
              <font-awesome-icon :icon="['fas', 'sync-alt']" style="font-size: 20px;" /> 
              Play Again 
            </span>    
            <span class="Message__choice" @click="loadHome()">  
              <font-awesome-icon :icon="['fas', 'home']" style="font-size: 20px;"/> 
              Home  
            </span> 
          </span>
        </span>
        <span 
          v-if="status && !isSuccess"
          class="Message__fail"
          >
          Game Over
          <span class="Message__choices"> 
            <span class="Message__choice" @click="initializeGame()"> 
              <font-awesome-icon :icon="['fas', 'sync-alt']" style="font-size: 20px;" /> 
              Try Again 
            </span>    
            <span class="Message__choice" @click="loadHome()">  
              <font-awesome-icon :icon="['fas', 'home']" style="font-size: 20px;"/> 
              Home  
            </span> 
          </span>
        </span>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    name: 'Message',
    props: {
        status: Boolean,
        isSuccess: Boolean,
    },
    methods: {
      ...mapMutations(['setGameInitializedStatus']),
      ...mapActions(['initializeGame', 'restoreDefault']),
      loadHome() {
        this.restoreDefault();
        this.$router.push({name: 'Welcome'});
      }
    }
}

</script>

<style lang='scss'>
.Message{
  position: absolute;
  top: 0;
  margin-top: 40vh;
  font-size: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: messageFlyIn 3s ease-out;
  font-family: 'Oswald', sans-serif;
  z-index: 3;

  &__success {
    color: white;
  }

  &__fail {
    color: red;
  }

  &__fail, &__success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  &__choices{
    color: white;
    font-size: 20px;
    font-weight: 500px;
    display: flex;
    justify-content: center;
    animation: messageFadeIn 4.5s ease-out;
  }
  
  &__choice {
    padding: 0 10px;

    &:hover {
      color: rgb(3, 182, 252);
      cursor: pointer;
    }
  }
}

@keyframes messageFlyIn {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes messageFadeIn {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

</style>