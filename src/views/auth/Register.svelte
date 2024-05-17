<script>
  import DistrictDropdown from "components/Dropdowns/DistrictDropdown.svelte";
  import { createUser } from "../../api/user";

  let DISTRICTS = [
    "Eastern District",
    "Tsuen Wan District",
    "Tuen Mun District",
    "Kowloon City District",
    "Yuen Long District",
    "Sha Tin District",
    "Kwai Tsing District",
    "Tai Po District",
    "Sham Shui Po District",
    "Islands District",
    "Southern District",
    "North District",
    "Kwun Tong District",
    "Wong Tai Sin District",
    "Central and Western District",
    "Sai Kung District",
    "Wan Chai District",
    "Yau Tsim Mong District",
  ];
  let details = {
    display_name: "",
    email: "",
    password: "",
    confirm_password: "",
    districts: [],
  };
  let errors = {
    display_name: "",
    email: "",
    password: "",
    confirm_password: "",
    districts: "",
  };
  let valid = false;

  //create funtion check DISTRICTS array when click and unclick checkbox remove the value accordingly
  function checkHandler(data) {
    //push data in details.district array
    if (details.districts.includes(data)) {
      details.districts = details.districts.filter((item) => item !== data);
    } else {
      details.districts.push(data);
    }
    console.log(details.districts);
  }

  const submitHandler = () => {
    valid = true;
    //validate display name
    if (details.display_name === "") {
      errors.display_name = "Name is required";
      valid = false;
    } else {
      errors.display_name = "";
    }
    //validate email
    if (details.email === "") {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(details.email)) {
      errors.email = "Email is invalid";
      valid = false;
    } else {
      errors.email = "";
    }
    //validate password
    if (details.password === "") {
      errors.password = "Password is required";
      valid = false;
    } else {
      errors.password = "";
    }
    //validate confirm password
    if (details.confirm_password === "") {
      errors.confirm_password = "Confirm Password is required";
      valid = false;
    } else if (details.confirm_password !== details.password) {
      errors.confirm_password = "Passwords do not match";
      valid = false;
    } else {
      errors.confirm_password = "";
    }
    //validate district
    if (details.districts.length === 0) {
      errors.districts = "District is required";
      valid = false;
    } else {
      errors.districts = "";
    }
    if (!valid) {
      return;
    }
    //submit user details to server
    createUser(details).then((res) => {
      console.log(res);
      window.location.href = "/auth/login";
    });
  };

  // core components
  const github = "../assets/img/github.svg";
  const google = "../assets/img/google.svg";
  export let location;
</script>

<div class="container mx-auto px-4 h-full">
  <div class="flex content-center items-center justify-center h-full">
    <div class="w-full lg:w-6/12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
      >
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div class="text-blueGray-400 text-center mb-3 font-bold">
            <br />
            <p>Secure Sign-in</p>
          </div>
          <form on:submit|preventDefault={submitHandler}>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-name"
              >
                Name
              </label>
              <input
                id="grid-name"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Name"
                bind:value={details.display_name}
              />
              <div class="error">{errors.display_name}</div>
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input
                id="grid-email"
                type="email"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"
                bind:value={details.email}
              />
              <div class="error">{errors.email}</div>
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                id="grid-password"
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
                bind:value={details.password}
              />
              <div class="error">{errors.password}</div>
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
              >
                Confirm Password
              </label>
              <input
                id="grid-password"
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Confirm Password"
                bind:value={details.confirm_password}
              />
              <div class="error">{errors.confirm_password}</div>
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
              >
                District
              </label>
              <!-- <DistrictDropdown /> -->
              <div class="flex-auto rounded pt-0 grid-2">
                {#each DISTRICTS as data, index}
                  <ul class="p-2  border border-gray-200 items-center w-full text-sm font-medium rounded text-gray-700 bg-white border border-gray-200  sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full">
                  <input
                    type="checkbox"
                    value={data}
                    id={index}
                    name="district1"
                    class="rounded"
                    on:click={() => {
                      checkHandler(data);
                    }}
                  />
                  <label class="p-2 " for="district1">{data}</label>
                  </li></ul>
                  <!-- <input type="checkbox" value="district 2" id="district2" name="district2">
                <label for="district2">District 2</label>
                <input type="checkbox" value="district 3" id="district3" name="district3">
                <label for="district3">District 3</label>
                <input type="checkbox" value="district 4" id="district4" name="district4">
                <label for="district4">District 4</label> -->
                {/each}
              </div>
              <div class="error">{errors.districts}</div>
            </div>

            <!-- Privacy Policy 
            <div>
              <label class="inline-flex items-center cursor-pointer">
                <input
                  id="customCheckLogin"
                  type="checkbox"
                  class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                />
                <span class="ml-2 text-sm font-semibold text-blueGray-600">
                  I agree with the
                  <a href="#pablo" on:click={(e) => e.preventDefault()} class="text-red-500">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
            -->

            <div class="text-center mt-6">
              <button
                class="bg-indigo-900 text-white active:bg-indigo-800 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
