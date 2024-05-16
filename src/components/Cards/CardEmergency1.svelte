<script>
  // core components

  // images
  const amber = "../assets/img/amber.png";
  const red = "../assets/img/red.png";
  const black = "../assets/img/black.png";
  const emergency =  "../assets/img/999.jpeg";
  const sos =  "../assets/img/sos.jpeg";
  // before
  const b1 = "../assets/img/b1.jpeg";
  const b2 = "../assets/img/b2.jpeg";
  const b3 = "../assets/img/b3.jpeg";
  const b4 = "../assets/img/b4.jpeg";
  const b5 = "../assets/img/b5.jpeg";
  // during
  const d1 = "../assets/img/d1.jpeg";
  const d2 = "../assets/img/d2.jpeg";
  const d3 = "../assets/img/d3.jpeg";
  const d4 = "../assets/img/d4.jpeg";
  const d5 = "../assets/img/d5.jpeg";
  // after
  const a1 = "../assets/img/a1.jpeg";
  const a2 = "../assets/img/a2.jpeg";
  const a3 = "../assets/img/a3.jpeg";
  const a4 = "../assets/img/a4.jpeg";
  const a5 = "../assets/img/a5.jpeg";
  // can be one of light or dark
  export let color = "light";
</script>

<div class="w-full mb-12 px-4">
  <div
    class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
          >
            Rainfall Warning System 
            降雨警报
          </h3>
          The city of Hong Kong issues three levels of warning for heavy rainfall:
          <strong>AMBER, RED and BLACK.</strong>
          <div class="block w-full overflow-x-auto">
            <div class="grid-3 w-full bg-transparent border-collapse">
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
                  Heavy rain exceeding 80 millimetres has been recorded daily, and is likely to continue.
        
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
                  150 millimetres of rainfall has fallen daily, and is likely to continue.
                
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
                  Very heavy rain exceeding 250 millimetres has fallen daily, and is likely to continue.
                </p>
              </div>

          </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
  <div
    class="relative flex flex-col min-w-0  break-words w-full shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}">
    <img
            src="{emergency}"
            class="object-contain max-w-96 mx-auto d-block"
            alt="..."
            />
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          
          <h3
            class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
          >
            Emergency Contact 緊急
          </h3>

          <div class="block w-full overflow-x-auto">
            <div class="grid-2 items-center w-full bg-transparent border-collapse">

              <div class="flex-flow:column p-3 "> 
                <strong>999</strong> 
                <br>Emergency services
              </div>
              <div class="flex-flow:column p-3 "> 
                <strong>+852 2527 7177</strong> 
                <br>Police Hotline
              </div>
              <div class="flex-flow:column p-3 "> 
                <strong>+852 2961 8989</strong> 
                <br>Department of Health
              </div>
              <div class="flex-flow:column p-3 "> 
                <strong>+852 1878 200</strong> 
                <br>Hong Kong Observatory
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<div class="w-full xl:w-4/12 px-4">
  <div 
    class="relative flex flex-col min-w-0 break-words shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <img
        src="{sos}"
        class="object-contain h-24 w-24 rounded-lg mx-auto d-block"
        alt="..."
      />
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <div class="block w-full overflow-x-auto">
                <div class="text-center p-1">
                 <strong>HKSOS Mobile App</strong> 
                </div>
                <p>
                 HKSOS is an outdoor safety app directly linked to the 999 Call Centre and becomes your lifeline to emergency services.
               </p>
               <a href="https://play.google.com/store/apps/details?id=com.sosapp.user&hl=zh_HK&pli=1">
                <div class="text-center font-semibold text-violet-800 ">Download on Google Play</div> 
               </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="w-full mb-12 px-4">
  <br>
  <div
    class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
          >
            Flood Preparation 防洪准备
          </h3>

          <div class="block w-full overflow-x-auto">
            <h4 class="font-semibold"> Before 前</h4>
            <div class="grid-5 w-full bg-transparent border-collapse">
              
              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{b1}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Stay informed on local news
                  <br> 
                    <div class="italic">了解当地新闻</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{b2}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Prepare an emergency bag
                    <div class="italic">准备一个应急包</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{b3}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Have an evacuation plan
                    <div class="italic">制定疏散计划</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{b4}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Leave before flooding starts
                    <div class="italic">在洪水开始之前离开</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{b5}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Keep useful items in flood-prone areas (sandbags, ladder, rope)
                    <div class="italic">将有用的物品存放在洪水易发地区</div>
                </div>
              </div>

            </div>
          </div>

          <div class="block w-full overflow-x-auto">
            <h4 class="font-semibold"> During 现在 </h4>
            <div class="grid-5 w-full bg-transparent border-collapse">
              
              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{d1}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Disconnect electricity and gas
                    <div class="italic">断开电力和燃气</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{d2}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Don't walk or drive in flood water
                    <div class="italic">了解当地新闻</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{d3}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Get to higher ground
                    <div class="italic">到达更高的地方</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{d4}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Follow evacuation orders
                    <div class="italic">遵守疏散命令</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{d5}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Lead animals to a safe place
                  <div class="italic">将动物带到安全的地方</div>
                </div>
              </div>

            </div>
          </div>

          <div class="block w-full overflow-x-auto">
            <h4 class="font-semibold"> After 后</h4>
            <div class="grid-5 w-full bg-transparent border-collapse">
              
              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{a1}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Avoid contact with flood water
                    <div class="italic">避免接触洪水</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{a2}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Do not touch power lines
                    <div class="italic">请勿触摸电源线</div>
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{a3}"
                  class="h-24 w-24 bg-white mx-auto d-block"
                  alt="..."
                  />
                  <br> Don't go home unless declared safe
                    <div class="italic">除非宣布安全，否则不要回家</div>  
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{a4}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> Communicate to loved ones
                    <div class="italic">与亲人沟通</div> 
                </div>
              </div>

              <div class="flex-flow:column p-3 ">
                <div class="align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-center">
                  <img
                  src="{a5}"
                  class="h-24 w-24 bg-white mx-auto d-block rounded-lg"
                  alt="..."
                  />
                  <br> When back home: clean and disinfect
                    <div class="italic">回家后：清洁和消毒</div> 
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

