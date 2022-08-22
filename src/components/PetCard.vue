<template>
  <div>
    <b-card
      :title="pet.attributes.name"
      :sub-title="pet.attributes.breed"
      :img-src="pet.attributes.url"
      img-alt="Image"
      img-top
      img-style="collor: red;"
      style="max-width: 30rem"
      img-width="354"
      img-height="222.94"
      class="mb-2 high-quality"
    >
      <b-card-text>
        {{ pet.attributes.description }}
      </b-card-text>
  
      <b-button-group class="mx-1">
        <div v-if="!pet.attributes.adopted">
          <b-button href="#" variant="success">Quero adotar!!</b-button>
        </div>
      </b-button-group>
  
      <b-button-group class="mx-1">
        <b-button :href="editPetUrl(pet.id)" variant="primary">Editar</b-button>
      </b-button-group>

      <b-button-group class="mx-1">
        <b-button @click="deletePetUrl(pet.id)" variant="danger">Remover</b-button>
      </b-button-group>
    </b-card>
  </div>
</template>
 
<script>
export default {
  name: 'PetCard',
  props: {
    pet: Object
  }, 
  methods: {
    editPetUrl(id) {
      return `http://localhost:8080/pets/${id}/edit`
    },
    deletePetUrl(id) {
      this.$swal.fire({
        title: 'Você tem certeza que irá deletar?',
        text: 'Após confirmação você não poderá reverter isso',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http.delete(`http://localhost:3000/actions/api/v1/pets/${id}`)
              .then(() => {
                this.$swal.fire({
                  title: 'Deletado!',
                  text: 'O Pet selecionado foi deletado.',
                  type: 'success'
                }).then(() =>{
                  location.reload();
                })
              })
              .catch(error => {
                this.$swal.fire({
                  icon: 'Erro',
                  title: 'Oops...',
                  text: `Algo deu errado! ${error}`,
                })
              });
        }
      })
    }
  }
}
</script>

<style scoped>
  img {
    object-fit: cover;
    object-position: unset;
  }
</style>
