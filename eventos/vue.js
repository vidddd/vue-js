new Vue({
  el: '#eventos',
  data: {
    contador: 0
  },
  methods: {
    sumar: function() {
      this.contador += 1;
    },
    restar: function() {
      this.contador -= 1;
    },
    alerta: function(mensaje) {
      alert(mensaje);
    }
  }
})
