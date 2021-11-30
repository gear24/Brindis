const app = new Vue({
  el: "#app",
  template: `
        <div class="container cont">
            <div class="row">
                <div class = "col-md-12" >
                    <img :src = "imagen" class="col-md-12" />
                </div>
            </div>

            <div class="row mt-3"> 
                <div class="col-md-4" v-for="drink in drinks">
                    <div class="card mb-3">
                        <img v-bind:src="'image/bebidas/' + drink.img">
                        <div class = "card-body" id='queso'>
                            <h3 class="card-title mb-3" >{{ drink.nombre}}</h3>
                            <p class="card-text">
                                <strong>Posee alcohol:</strong> {{ drink.tiene }}
                            </p>
                            <p class="card-text">
                                <strong>Precio:</strong> {{ drink.precio }}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    `,
  data: {
    drinks: [],
    buscar: "",
    imagen:
        "image/Bebidas/Banner1.png"
  },
  methods: {
    getdrinks: function () {
      axios.get("Bebidas.json").then((response) => {
        this.drinks = response.data;
      });
    },
  },
  ///////////////////////////////////////////////////////////////////
  mounted: function () {
    this.getdrinks();
  },
});