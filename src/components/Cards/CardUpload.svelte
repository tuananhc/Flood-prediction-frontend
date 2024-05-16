<script>
  import { upload_csv } from "../../api/data";
  // 
  var file;

  // core components
  //To Do: Required for file upload, user info about whats going on
  // Append rest of form data
  function handleFileChange(event) {
    file = event.target.files[0];
    console.log(file);
  }

  // function handleFormDataChange(event) {
  //   console.log(event.target.name, event.target.value);
  //   formTest.set(event.target.name, event.target.value);
  // }
  async function uploadFile(event) {
    event.preventDefault();
    var formData = new FormData()
    formData.append("file", file)
    console.log("File" + file)
    const response = await upload_csv(formData);
    console.log("Test Response:")
    console.log(response)
    document.getElementById("errorArea").innerHTML = response.text();
    console.log( response.text());
  }

  async function trainAI(event){
    let x = 0
  }

  function handleAIButtonClick(event){
    x
  }
  // can be one of light or dark
  export let color = "light";
</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded {color ===
  'light'
    ? 'bg-white'
    : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light'
            ? 'text-blueGray-700'
            : 'text-white'}"
        >
          Upload Data
        </h3>
      </div>
    </div>
  </div>
  <div class="block w-full overflow-x-auto">
    <!--Districts table -->
    <div class="max-w-xs mx-auto px-9" id="formUpload" name="formUpload">
      <!-- <div class="mb-5">
        <label
          for="Dataset"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Dataset</label
        >
        <input
          type="text"
          id="Dataset"
          name="Dataset"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Rainfall from Automatic Weather Station"
          on:input={handleFormDataChange}
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="dataProvider"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Data Provider</label
        >
        <input
          type="text"
          id="dataProvider"
          name="dataProvider"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Hong Kong Observatory"
          on:input={handleFormDataChange}
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="dataCategory"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Data Category</label
        >
        <input
          type="text"
          id="dataCategory"
          name="dataCategory"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Climate and Weather"
          on:input={handleFormDataChange}
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="format"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Format</label
        >
        <input
          type="text"
          id="format"
          name="format"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Upload JSON, CSV, etc."
          on:input={handleFormDataChange}
          required
        />
      </div> -->
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        style="display: none;"
        on:change={handleFileChange}
        required
      />
      <button
        type="button"
        class="bg-blueGray-600 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-80 sm:w-auto mb-6 px-1 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        on:click={() => document.getElementById("fileInput").click()}
        required>Upload File</button
      >
      {#if file}
        <div>
          <p>{file.name}</p>
        </div>
      {:else}
        <div>
          <p>Please select your file to upload.</p>
        </div>
      {/if}
      <!-- 
          <p>Would you like to initiate a training cycle with the new data?</p>
          <input type="radio" id="train_no" bind:group={trainingSelection} on:input={handleFormDataChange} name="train_selection" value="train_no" class="display: inline-block; margin-right: 10px;" required>
          <label for="train_no">No</label>
          <input type="radio" id="train_yes" bind:group={trainingSelection} on:input={handleFormDataChange} name="train_selection" value="train_yes" class="display: inline-block; margin-right: 10px;"required >
          <label for="train_yes">Yes</label><br>
        <div id="errorArea"></div>
        <br>
        -->
      <div id="errorArea"></div>
      <button
        type="button"
        class="bg-violet-800 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mb-8 px-1 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        on:click={uploadFile}>Submit</button
      >
      <p>
        Once you have finished uploading data, click the below button to train
        the A.I Model
      </p>
      <button
        type="button"
        class="bg-violet-800 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mb-8 px-1 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        on:click={trainAI}
        style="margin-left: 10px;"
        >Launch A.I Training Cycle
      </button>
    </div>
  </div>
</div>
