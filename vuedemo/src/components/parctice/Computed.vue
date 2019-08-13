<template>
  <div>
    <div class="form-inline">
      <input type="text"
             v-model="firstName"> and <input type="text"
             v-model="lastName" /> = <input disabled
             type="text"
             v-model="fullName" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Computed',
  data () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    computed: function () {
      // Main to deal login
      this.fullName = this.firstName + this.lastName
    }
  },
  watch: {
    fullName: function (newVal, oldVal) {
      // This is a mixture of methods and computed
    }
  },
  computed: {
    // All data modify will emit this method, need to return a data
    'fullName': function () {
      return this.firstName + '```' + this.lastName
    }
  }
}
</script>
