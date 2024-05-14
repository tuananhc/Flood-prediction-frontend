<script>
  // core components
  import MapExample from "components/Maps/MapExample.svelte";
  export let location;
</script>

<div class="flex flex-1">
  <div class="w-full px-4">
    AINTNOWAY
    <div
      class="relative flex h-dvh flex-1 flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    >
      <MapExample />
    </div>
  </div>
</div>
