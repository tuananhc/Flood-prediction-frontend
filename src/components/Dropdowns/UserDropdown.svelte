<script>
  // library for creating dropdown menu appear on click
  import { createPopper } from "@popperjs/core";

  const team2 = "/assets/img/user.png";

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

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("userInfo");
    window.location.href = "/auth/login";
  };
</script>

<div>
  <a
    class="text-blueGray-500 block"
    href="#pablo"
    bind:this={btnDropdownRef}
    on:click={toggleDropdown}
  >
    <div class="items-center flex">
      <span
        class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
      >
        <img
          alt="..."
          class="w-full rounded-full align-middle border-none shadow-lg"
          src={team2}
        />
      </span>
    </div>
  </a>
  <div
    bind:this={popoverDropdownRef}
    class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
      ? 'block'
      : 'hidden'}"
  >
    <a
      href="/profile"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      View Profile
    </a>
    <div class="h-0 my-2 border border-solid border-blueGray-100" />
    <button
      class="text-left text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      on:click={logout}
    >
      Log Out
    </button>
  </div>
</div>
