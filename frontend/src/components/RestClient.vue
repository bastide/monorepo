<template>
  <div class="container-fluid">
    <div class="text-bg-light">
      Ce composant fait un appel AJAX sur <code>/rest/combienDePays</code> pour accéder à la couche "Services".
    </div>
    <div><button @click="appel">Combien de pays ?</button></div>
  </div>
</template>

<script setup>

function appel() {
  fetch("/rest/combienDePays", { method: "PUT" })
    .then((response) => {
      if (!response.ok) { // status != 2XX
        throw new Error(`code d'erreur = ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      alert(`Il y a ${json.combien} pays dans la base de données.`);
    })
    .catch((error) => alert(error));
}
</script>
