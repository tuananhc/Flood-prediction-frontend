<script>
  // navbar and header
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import HeaderStats from "components/Headers/HeaderStats.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";

  // main map component placeholder
  import MapExample from "components/Maps/MapExample.svelte";
 
  // card components
  import CardTable from "components/Cards/CardTable.svelte";
  import CardPredict from "components/Cards/CardPredict.svelte";
</script>

<div class="relative md:ml-64 bg-blueGray-100">
  <AdminNavbar />
  <HeaderStats />

  <div class="px-4 md:px-10 mx-auto w-full -m-24">
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
      <div class="w-full px-4">
        <CardPredict />
      </div>
      <div class="w-full mb-12 px-4">
        <CardTable />
      </div>
    </div>
    <FooterAdmin /> 
  </div>
  
</div>