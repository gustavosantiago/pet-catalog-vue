<template>
  <div>
    <br />

    <b-card>
      <div>
        <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
        <b-form>
          <b-form-group
            id="input-group-1"
            label="Pet Name"
            label-for="input-1"
            description=""
          >
            <b-form-input
              id="input-1"
              type="email"
              v-model="pet.attributes.name"
              placeholder="Pet name example"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PetForm',
  props: {
    pet: Object
  },
}
</script>