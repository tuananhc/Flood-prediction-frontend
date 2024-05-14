<script>
  // navbar and header
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import HeaderEmergency from "components/Headers/HeaderEmergency.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";
  
  // core components
  import CardEmergency1 from "components/Cards/CardEmergency1.svelte";
  
  export let location;
</script>

<div class="relative md:ml-64 bg-blueGray-100">
  <AdminNavbar />
  <HeaderEmergency />

  <div class="px-4 md:px-10 mx-auto w-full -m-24">
    <div class="flex flex-wrap mt-4">
        <CardEmergency1 />
    </div>
  <FooterAdmin /> 
  </div>
</div>
