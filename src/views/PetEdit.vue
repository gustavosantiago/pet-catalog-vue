<template>
  <div class="pet-edit">
    <br />
    Render edit
    <PetForm :pet=this.pet />
  </div>
</template>

<script>
import PetForm from '@/components/PetForm.vue';
export default {
  name: 'PetEdit',
  data() {
    return {
      pet: Object,
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