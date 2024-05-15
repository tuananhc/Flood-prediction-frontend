<script>
  // import
  import { createPopper } from "@popperjs/core";
  // import { DateInput } from 'date-picker-svelte'
	// let date = new Date();
 
  // core components
  let dropdownPopoverShow = false;
  let btnDropdownRef;
  let popoverDropdownRef;

  const toggleDropdown = (event) => {
    event.preventDefault();
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };
</script>

<div>
  <!--<DateInput bind:value={date} />-->
</div>
  <div>
    Date:
    <button class="border border-gray-200 text-gray-500 text-sm  ml-3 px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1  active:bg-indigo-500 ease-linear transition-all duration-150" type="button" bind:this="{btnDropdownRef}"
    on:click="{toggleDropdown}">
      Choose Date...
  </button>

  <div
    bind:this="{popoverDropdownRef}"
    class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
  >
    <a
      href="#pablo" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      District 1
    </a>
    <a
      href="#pablo" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      District 2
    </a>
    <div class="h-0 my-2 border border-solid border-blueGray-100" />
    <a
      href="#pablo" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      District 3
    </a>
  </div>
</div>
