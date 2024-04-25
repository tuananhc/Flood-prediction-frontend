<script>
  // core components
  import IndexNavbar from "components/Navbars/IndexNavbar.svelte";
  import Footer from "components/Footers/Footer.svelte";

  const patternVue = "/assets/img/main.jpeg";
  export let location;
</script>

<IndexNavbar />
<section class="header relative pt-16 items-center flex h-screen max-h-860-px">
  <div class="container mx-auto items-center flex flex-wrap">
    <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
      <div class="pt-32 sm:pt-0">
        <h2 class="font-semibold text-4xl text-violet-950">
          The Future of Flood Prediction
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
          Using our newest Machine Learning software, accurately predict the risk of flooding in your area to prepare accordingly
        </p>
        <div class="mt-12">
          <a
            href="/admin/dashboard"
            class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            Flood Forecast
          </a>
          <a
          href="/admin/emergency"
          class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            Emergency Information
          </a>
        </div>
      </div>
    </div>
    <img
    class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-max max-h-screen"
    src="{patternVue}"
    alt="..."
  />
  </div>

</section>
<!-- Middle Layout
<section class="pb-16 bg-blueGray-200 relative pt-32">
  <div
    class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
    style="transform: translateZ(0);"
  >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        class="text-blueGray-200 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>

  <div class="container mx-auto">
    <div
      class="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10"
    >
      <div class="w-full text-center lg:w-8/12">
        <p class="text-4xl text-center">
          <span role="img" aria-label="love">
            😍
          </span>
        </p>
        <h3 class="font-semibold text-3xl">
          Do you love this Starter Kit?
        </h3>
        <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
          Cause if you do, it can be yours now. Hit the buttons below to
          navigate to get the Free version for your next project. Build a new
          web app or give an old project a new look!
        </p>
        <div class="sm:block flex flex-col mt-10">
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index"
            target="_blank"
            class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            Get started
          </a>
          <a
            href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index"
            target="_blank"
            class="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            <i class="fab fa-github text-lg mr-1"></i>
            <span>Help With a Star</span>
          </a>
        </div>
        <div class="text-center mt-16"></div>
      </div>
    </div>
  </div>
</section>
-->
<Footer />
