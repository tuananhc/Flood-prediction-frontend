<script>
  // core components
  import CardTable from "components/Cards/CardTable.svelte";
  import CardUpload from "components/Cards/CardUpload.svelte";
  export let location;
</script>

<div class="flex flex-wrap mt-4">
  <div class="w-full mb-12 px-4">
    <CardTable />
  </div>
  <div class="w-full mb-12 px-4">
    <CardUpload />
  </div>
  <!-- extra table option
  <div class="w-full mb-12 px-4">
    <CardTable color="dark" />
  </div>
   -->
</div>
