<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">Frontend</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/ajax" class="nav-link">Combien de pays ?</router-link></li>
            <li class="nav-item"><router-link to="/countries" class="nav-link">Lister les pays</router-link></li>
            <li class="nav-item"><router-link to="/ajoutePays" class="nav-link">Ajouter un pays</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
        <router-view />
    </div><!-- /.container -->
  </div>
</template>
