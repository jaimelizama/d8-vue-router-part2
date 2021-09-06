<template>
  <div>
    <header
      class="masthead"
      style="background-image: url('/assets/img/chevrolet-blazer.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1>
                <strong>Panel de Administración</strong>
              </h1>
              <router-link class="admin-panel" to="/administrador/simple"
                >Administrador Simple |
              </router-link>
              <router-link class="admin-panel" to="/administrador/avanzado"
                >Administrador Avanzando
              </router-link>

              <router-view> </router-view>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Administrador'
}
</script>

<style>
.admin-panel {
  color: white;
}
</style>
