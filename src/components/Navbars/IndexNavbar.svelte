<script>
  import { link } from "svelte-routing";

  // core components

  let navbarOpen = false;

  function setNavbarOpen() {
    navbarOpen = !navbarOpen;
  }
</script>

<nav
  class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-violet-950 shadow"
>
  <div
    class="container px-4 mx-auto flex flex-wrap items-center justify-between"
  >
    <div
      class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
    >
      <a
        use:link
        class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
        href="/"
      >
        FloodTech
      </a>
      <button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click="{setNavbarOpen}"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div
      class="lg:flex flex-grow items-center {navbarOpen ? 'block':'hidden'}"
      id="example-navbar-warning"
    > 
    <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">

    <!-- TEST ROUTING -->
        <li class="flex items-center">
          <a
          href="/admin/dashboard"
          class="hover:text-blueGray-600 text-white px-3 py-2 flex items-center text-xs uppercase font-bold"
          >
            Forecast
          </a>
        </li>

        <li class="flex items-center">
          <a
          href="/admin/emergency"
          class="hover:text-blueGray-600 text-white px-3 py-2 flex items-center text-xs uppercase font-bold"
          >
            Emergency Info
          </a>
        </li>

        <li class="flex items-center">
          <button
            class="bg-violet-700 text-white active:bg-violet-800 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            href="/auth/register"
            type="button"
          >
            <i class="fas fa-plus"></i>Register
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>