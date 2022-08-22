<template>
  <div>
    <br />
    <b-container class="bv-example-row">
      <b-card-group deck>
        <b-row cols="2">
          <div v-for="pet in pets" :key="pet.id">
            <PetCard :pet=pet />
          </div>
        </b-row>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import PetCard from '../components/PetCard.vue'

export default {
  name: 'PetList',
  data() {
    return {
      pets: [],
    };
  },
  created() {
    this.getPets();
  },
  methods: {
    getPets() {
      this.$http
        .get("http://localhost:3000/discovery/api/v1/pets?limit=42")
        .then((res) => {
          this.pets = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    PetCard
  },
}
</script>