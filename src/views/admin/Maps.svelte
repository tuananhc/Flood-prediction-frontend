<script>
  // core components
  import MapExample from "components/Maps/MapExample.svelte";
  export let location;
</script>

<div class="flex flex-wrap">
  <div class="w-full px-4">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    >
      <div class="p-6">
        <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
          Showing Flood Risk Per District
        </h6>
        <h2 class="text-blueGray-700 text-xl font-semibold">
          Hong Kong City
        </h2>
      </div>
      <MapExample />
    </div>
  </div>
</div>
