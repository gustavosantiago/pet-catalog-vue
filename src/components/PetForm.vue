<template>
  <div>
    <br />

    <b-card>
      <div>
        <b-form @submit.prevent="submitForm" @reset="returnToList">
          <b-form-group
            label="Nome do pet"
            label-for="pet_name"
            description="Nome do amável pet"
          >
            <b-form-input
              id="pet_name"
              type="text"
              v-model.form="form.name"
              placeholder="Rubens"
              required
            />
          </b-form-group>

          <b-form-group
            label="Raça do pet"
            label-for="pet_breed"
            description="Insira a raça do pet"
          >
            <b-form-input
              id="pet_breed"
              type="text"
              v-model.form="form.breed"
              placeholder="Salsichinha"
              required
            />
          </b-form-group>

          <b-form-group
            label="Descrição"
            label-for="pet_description"
            description="Fale mais sobre o pet"
          >
            <b-form-input
              id="pet_description"
              type="text"
              v-model.form="form.description"
              placeholder="Description sobre o pet"
              required
            />
          </b-form-group>

          <b-form-group
            label="Link da foto"
            label-for="pet_photo"
            description="URL da foto bonitona :)"
          >
            <b-form-input
              id="pet_photo"
              type="text"
              v-model="form.url"
              placeholder="http://www.pet.image.com"
              required
            />
          </b-form-group>

          <b-button-group class="mx-1">
            <b-button type="submit" variant="primary">Enviar</b-button>
          </b-button-group>

          <b-button-group class="mx-1">
            <b-button type="reset" variant="danger">Cancelar</b-button>
          </b-button-group>
        </b-form>
      </div>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'PetForm',
    data() {
      return {
        form: {
          id: null,
          name: '',
          url: '',
          description: '',
          breed: ''
        }
      };
    },
    created() {
      this.form = this.pet.attributes
    },
    props: {
      pet: {},
    },
    methods: {
      returnToList() {
        this.$router.push('/')
      },
      submitForm (event) {
        console.log('event: ', event)
        const petID = this.pet.id
        const params = this.setParams(this.form)
        
        console.log('Params: ', params)

        this.$http
          .put(`http://localhost:3000/actions/api/v1/pets/${petID}.json`, params)
          .then(() => {
            this.$swal.fire({
              title: 'Atualizado!',
              text: 'O Pet selecionado foi atualizado.',
              type: 'success'
            })
          })
          .catch((error) => {
            this.$swal.fire({
              icon: 'Erro',
              title: 'Oops...',
              text: `Algo deu errado! ${error.response.data.errors}`,
            })
          });
      },
      setParams(form) {
        return { 
          pet: {
            name: form.name,
            description: form.description,
            url: form.url,
            breed: form.breed
          }
        }
      }
    }
  }
</script>