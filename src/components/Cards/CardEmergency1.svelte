<script>
  // core components

  const amber = "../assets/img/amber.png";
  const red = "../assets/img/red.png";
  const black = "../assets/img/black.png";

  // can be one of light or dark
  export let color = "light";
</script>



<div
  class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}">
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          Rainfall Warning System
        </h3>
        The city of Hong Kong issues three levels of warning for heavy rainfall:
        <strong>AMBER, RED and BLACK.</strong>
        <div class="block w-full overflow-x-auto">
          <div class="grid-3 items-center w-full bg-transparent border-collapse">
            <div class="flex-flow:column p-3 "> 
              <div class="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                <img
                src="{amber}"
                class="h-24 w-24 bg-white mx-auto d-block"
                alt="..."
                />
                <br> Amber Warning
              </div>
              <p>
                Heavy rain exceeding 30 millimetres has been recorded in an hour, and is likely to continue.
      
              </p>
            </div>
         
            <div class="flex-flow:column p-3"> 
              <div class="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                <img
                src="{red}"
                class="h-24 w-24 bg-white mx-auto d-block"
                alt="..."
                />
                <br> Red Warning
              </div>
              <p>
                50 millimetres of rainfall has fallen in an hour, and is likely to continue.
               
              </p>
            </div>

            <div class="flex-flow:column p-3"> 
              <div class="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                <img
                src="{black}"
                class="h-24 w-24 bg-white mx-auto d-block"
                alt="..."
                />
                <br> Black Warning
              </div>
              <p>
                Very heavy rain exceeding 70 millimetres has fallen in an hour, and is likely to continue.
              </p>
            </div>


         </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br>
<div
  class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}">
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          Emergency Contact
        </h3>
      </div>
    </div>
  </div>
</div>
<br>
<div
  class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}">
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          Evacuation Guidelines
        </h3>
      </div>
    </div>
  </div>


  <div class="block w-full overflow-x-auto">
    
    
  </div>
</div>
