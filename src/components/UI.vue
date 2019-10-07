<template>
  <div class="hello">
    {{ count }}
    <button @click="increment" class="melogachejil">Increment</button> 
  </div>
</template>

<script>
export default {
  name: 'UI', 
  data() {
      return {
        count: 0
      }
    }, 
    methods: {
      increment() {
        this.count += 1; 
      }
    }
}
</script> 