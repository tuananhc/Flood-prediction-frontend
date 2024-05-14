<script>
  // make dynamic date to be added to footer
  let date = new Date().getFullYear();

  export let absolute = false;
</script>

<footer
  class="pb-6 {absolute ? 'absolute w-full bottom-0 bg-violet-1000' : 'relative'}"
>
  <div class="container mx-auto px-4">
    <hr class="mb-6 border-b-1 border-blueGray-600" />
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4">
        <div
          class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
        >
          Copyright © {date}
          <a
            href="https://www.creative-tim.com?ref=ns-footer-small"
            class="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
          >
            FloodTech
          </a>
        </div>
      </div>
      <div class="w-full md:w-8/12 px-4">
        <ul class="flex flex-wrap list-none md:justify-end justify-center">
          <li>
            <a
              href="https://github.com/creativetimofficial/notus-svelte/blob/main/LICENSE.md?ref=ns-footer-small"
              class="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
