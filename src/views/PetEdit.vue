<template>
  <div class="pet-edit">
    <br />
    <b-container class="bv-example-row">
      Edit Pet: {{ this.pet.id }}

      <div v-if="this.showForm">
        <PetForm :pet=this.pet />
      </div>
    </b-container>
  </div>
</template>

<script>
import PetForm from '@/components/PetForm.vue';

export default {
  name: 'PetEdit',
  data() {
    return {
      pet: {},
      showForm: false
    };
  },
  created() {
    this.getPet();
  },
  methods: {
    getPet() {
      this.$http
        .get(`http://localhost:3000/discovery/api/v1/pets/${this.$route.params.id}/edit.json`)
        .then((res) => {
          this.pet = res.data.data;
          this.showForm = true
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    PetForm
  },
}
</script>