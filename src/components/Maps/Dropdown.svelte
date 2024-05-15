<script>
  import { link } from "svelte-routing";
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

<div style=" border: 1px solid black">
  <a
    class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
    href="#pablo"
    bind:this="{btnDropdownRef}"
    on:click="{toggleDropdown}"
  >
    Regions
  </a>
  <div
    bind:this="{popoverDropdownRef}"
    class="absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
  >
    <ul>
      <li class="p-4">
        <input type="checkbox" bind:checked={selectAll} on:change={handleSelectAll}/>
        <span>All</span>
      </li>
      {#each districts as district}
        <li class="p-4">
          <input type="checkbox" bind:checked={district.selected} on:change={onChange}/>
          <span>{capitalizeFirstLetter(district.name)}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>

