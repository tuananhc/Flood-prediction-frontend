<script>
  export let title;
  export let content;

</script>

<div class="flex">
  <h1>{title}</h1>
  <hr>  
  <p>{content}</p>
  <button class="text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
    <i class="fas fa-heart"></i>
  </button>
</div>