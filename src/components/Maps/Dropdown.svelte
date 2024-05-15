<script>
  // library for creating dropdown menu appear on click
  import { createPopper } from "@popperjs/core";

  export let districts = [];
  export let onChange;
  export let onSelectAll;
  export let onDeselectAll;
  
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

  var selectAll = false;

  function capitalizeFirstLetter(string) {
    const words = string.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  }

  function handleSelectAll() {
    if (selectAll) {
      onSelectAll();
    } else {
      onDeselectAll();
    }
  }
</script>
<div class='ml-3 p-4'>
  <a
    class="w-40 border border-gray-200 text-gray-500 text-sm px-6 py-3 shadow rounded  active:bg-indigo-500 hover:text-indigo-900 flex items-center text-center font-bold justify-center"
    href="#pablo"
    
    bind:this="{btnDropdownRef}"
    on:click="{toggleDropdown}"
  >
    Select District
  </a>
  <div
    bind:this="{popoverDropdownRef}"
    class="h-500 overflow-y-scroll absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
  >
    <ul>
      <li class="p-3">
        <input type="checkbox"  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-indigo transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:accent-indigo checked:bg-indigo-900 checked:before:bg-indigo-900 hover:before:opacity-10"
        bind:checked={selectAll} on:change={handleSelectAll} />
        <span class="ml-3">All</span>
      </li>
      {#each districts as district}
        <li class="p-3">
          <input type="checkbox"  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-indigo transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo checked:bg-indigo-900 checked:before:bg-indigo-900 hover:before:opacity-10"
          bind:checked={district.selected} on:change={onChange}/>
          <span class="ml-3">{capitalizeFirstLetter(district.name)}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>

