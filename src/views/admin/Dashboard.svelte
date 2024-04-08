<script>
  // core components
  import CardTable from "components/Cards/CardTable.svelte";
  import CardLineChart from "components/Cards/CardLineChart.svelte";
  import CardBarChart from "components/Cards/CardBarChart.svelte";
  export let location;
</script>

<div>
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardLineChart />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardBarChart />
    </div>
    <div class="w-full mb-12 px-4">
      <CardTable />
    </div>
  </div>
  
</div>
