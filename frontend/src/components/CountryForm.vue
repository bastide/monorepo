<template>
  <div class="container">
    <!-- Un formulaire pour saisir les valeurs de la catégorie à ajouter -->
    <form @submit.prevent="ajoutePays">
      <div class="form-group row">
        <div class="col-xs-2">
          <label for="code">Code ISO</label>
          <input id="code" v-model="data.formulaire.code" size="2" maxlength="2" class="form-control mb-2">
        </div>
        <div class="col-xs-2">
          <label  for="name">Nom du pays</label>
          <input id="name" v-model="data.formulaire.name" class="form-control mb-2">
        </div>
        <div class="col-xs-2">
        <button type="submit" class="btn btn-primary mb-2">Ajouter</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// Pour réinitialiser le formuaire
const paysVide = {
  code: "",
  name: ""
};

let data = reactive({
  // Les données saisies dans le formulaire
  formulaire: { ...paysVide },
});

function ajoutePays() {
  // Ajouter un pays avec les données du formulaire
  const options = {
    method: "POST", // Verbe HTTP POST pour ajouter un enregistrement
    body: JSON.stringify(data.formulaire),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("/api/countries", options)
    .then((response) => {
      if (!response.ok) { // status != 2XX
        throw new Error(`code d'erreur = ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      alert(`Le pays ${json.id} a été ajouté.`);
      data.formulaire = { ...paysVide };
    })
    .catch(alert);
}
</script>