<script>
  // navbar and header
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import HeaderStats from "components/Headers/HeaderStats.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";
  
  // core components
  import CardSettings from "components/Cards/CardSettings.svelte";
  import CardProfile from "components/Cards/CardProfile.svelte";
  export let location;
</script>

<div class="relative md:ml-64 bg-blueGray-100">
  <AdminNavbar />
  <HeaderStats />
  
  <div class="px-4 md:px-10 mx-auto w-full -m-24">
    <div class="flex flex-wrap">
      <div class="w-full px-4">
        <CardSettings />
      </div>
    </div>
  <FooterAdmin /> 
  </div>

</div>
