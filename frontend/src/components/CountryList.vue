<template>
  <div class="container mt-3">
    <div class="text-bg-light">
      Ce composant fait un appel AJAX sur <code>/api/countries</code> pour récupérer la liste des pays.
    </div>
    <table class="table table-bordered table-sm table-hover">
      <thead>
        <tr>
          <th>Code</th>
          <th>Nom</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="country in data.countries" :key="country.id">
          <td>{{ country.code }}</td>
          <td>{{ country.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

let data = reactive({
  countries: [],
});

function refresh() {
  fetch("/api/countries")
    .then((response) => {
      if (!response.ok) { // status != 2XX
        throw new Error(`code d'erreur = ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      data.countries = json._embedded.countries;
    })
    .catch((error) => alert(error));
}

onMounted(refresh);
</script>
