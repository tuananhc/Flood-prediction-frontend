<script>
  // core components
  import TableDropdown from "components/Dropdowns/TableDropdown.svelte";

  const bootstrap = "../assets/img/login_bg.jpeg";
  const angular = "../assets/img/login_bg.jpeg";
  const sketch = "../assets/img/login_bg.jpeg";
  const react = "../assets/img/login_bg.jpeg";
  const vue = "../assets/img/login_bg.jpeg";


  // can be one of light or dark
  export let color = "light";
</script>



<div
  class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          How to prepare: 
        </h3>
      </div>
    </div>
  </div>

  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          During 
        </h3>
      </div>
    </div>
  </div>

  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          After
        </h3>
      </div>
    </div>
  </div>
  
  <div class="block w-full overflow-x-auto">
    
    
  </div>
</div>
