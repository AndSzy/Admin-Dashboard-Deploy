<template>
  <div class="welcome-page">
    <div class="welcome-title">Welcome to The Economic Dashboard.</div>
    <!-- <div class="welcome-title">Place, where you can create personalized charts.</div> -->
    <div class="welcome-p">Place, where you can create personalized charts.</div>
    <div class="welcome-p">
      In order to start select one of the existing dashboards from the left-hand
      side menu or create your own.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.welcome-page {
  /* padding: 20px; */
  /* color: var(--navbar-background); */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 81px;
  margin-left: 37px;
}

/* .welcome-page h1 {
    font-size: 40px;
} */

.welcome-page .welcome-title {
  /* width: 600px; */
  color: #000;
  margin-bottom: 32px;
  text-align: left;
  /* font-family: 'SharpGroteskWide'; */
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  white-space: pre-wrap;
}

.welcome-page .welcome-p {
  max-width: 700px;
  font-size: 20px;
  line-height: 26px;
  color: #000;
  margin-bottom: 32px;
  text-align: left;
  /* font-family: 'SharpGrotesk'; */
  font-weight: 400;
}

@media (min-width: 1079px) {
  .welcome-page {
    margin-top: 131px;
    margin-left: 113px;
  }
}
</style>