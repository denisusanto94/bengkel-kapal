<template>
  <div >
    <b-container fluid>
      <b-row>
        <b-col sm="2" class="logo"><img class="img-logo" src="./assets/img/logo-patria.png" width="160"></b-col>
        <b-col sm="10" class="header"><Header/></b-col>
      </b-row>
      <b-row>
        <b-col sm="2" class="sidebar"><Sidebar/></b-col>
        <b-col sm="10" class="container-content"><router-view/></b-col>
      </b-row>
      <b-col sm="12" class="footer"><Footer/></b-col>
    </b-container>
  </div>
</template>

<script>
import Sidebar from './components/container/Sidebar';
import Header from './components/container/Header';
import Footer from './components/container/Footer';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    Footer
  }
}
</script>