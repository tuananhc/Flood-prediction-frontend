<script>
  // navbar and header
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import HeaderStats from "components/Headers/HeaderStats.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";

  // core components
  import CardUpload from "components/Cards/CardUpload.svelte";
  import CardPageVisits from "components/Cards/CardPageVisits.svelte";
  import CardSocialTraffic from "components/Cards/CardSocialTraffic.svelte";
  export let location;
</script>

<div class="relative md:ml-64 bg-blueGray-100">
  <AdminNavbar />
  <HeaderStats />

  <div class="px-4 md:px-10 mx-auto w-full -m-24">
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <CardUpload />
      </div>
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardPageVisits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <CardSocialTraffic />
      </div>
      <!-- extra table option
      <div class="w-full mb-12 px-4">
        <CardTable color="dark" />
      </div>
      -->
    </div>
  <FooterAdmin /> 
  </div>
  
</div>

