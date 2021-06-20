<template>
  <h1>Options usage async component</h1>

  <div class="app">
    <AsyncComponent />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

import Error from '@/components/Error';
import Loader from '@/components/Loader';

export default {
  name: 'App',
  components: {
    AsyncComponent: defineAsyncComponent({
      loader: () =>
        new Promise(resolve =>
          setTimeout(() =>
            resolve(import('@/components/StandAlone')),
            2000
          )
        ),
      loadingComponent: Loader,
      errorComponent: Error,
      delay: 200,
      timeout: 3000,
      suspensible: false,
      onError(error, retry, fail, attempts) {
        if (error.message.match(/fetch/) && attempts <= 3) {
          retry();
        } else {
          fail();
        }
      }
    }),
  },
}
</script>

<style>
body {
  margin: 0;
}

#app {
  color: #2c3e50;
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1 {
  background-color: #f77cff;
  font-size: 35px;
  margin: 0;
  padding: 25px;
  text-align: center;
}

p {
  font-size: 25px;
  text-align: center;
}
</style>
