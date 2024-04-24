<script>
  import { Router, Route } from "svelte-routing";

  // components for this layout
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";

  // pages for this layout
  import Dashboard from "views/admin/Dashboard.svelte";
  import Settings from "views/admin/Settings.svelte";
  import Tables from "views/admin/Tables.svelte";
  import Maps from "views/admin/Maps.svelte";
  import Emergency from "views/admin/Emergency.svelte";

  export let location;
  export let admin = "";
</script>

<div>
  <Sidebar location={location}/>
      <Router url="admin">
        <Route path="dashboard" component="{Dashboard}" />
        <Route path="settings" component="{Settings}" />
        <Route path="emergency" component="{Emergency}" />
        <Route path="tables" component="{Tables}" />
        <Route path="maps" component="{Maps}" />
      </Router>
    <FooterAdmin /> 
</div>

