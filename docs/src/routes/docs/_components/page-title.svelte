<script>
  export let title;
  export let subtitle = '';
  export let id = '';
</script>

<header id="page-heading">
  <h1 {id}>{title}</h1>
  <p>{subtitle}</p>
  <hr />
</header>

<style>
  header {
    margin-bottom: 1rem;
  }

  h1 {
    margin: 0 0 0.3rem !important;
  }

  p {
    margin: 0 !important;
    font-style: italic;
    text-align: left !important;
  }

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(100, 100, 100, 0.8), rgba(100, 100, 100, 0.5), rgba(0, 0, 0, 0));
  }
</style>
