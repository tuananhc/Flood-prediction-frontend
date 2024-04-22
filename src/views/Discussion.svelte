<script>
  import { Link } from "svelte-routing";

  // core components
  import IndexNavbar from "components/Navbars/IndexNavbar.svelte";
  import Footer from "components/Footers/Footer.svelte";
  import DiscussionPost from "../components/DiscussionPost.svelte";

  const patternVue = "/assets/img/pattern_svelte.png";
  export const data = [
    {
      "title": "My house is flooded send help",
      "content": "DUH"
    }
  ]
</script>

<IndexNavbar />
<section class="header relative pt-16 flex h-screen max-h-860-px">
  <div class="mx-auto items-center flex-0.8 flex-wrap">
      <div class="pt-32 sm:pt-0">
        <h2 class="font-semibold text-4xl text-blueGray-600">
          Discussion
        </h2>
        <button class="text-lightBlue-500 bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          <i class="fas fa-plus"></i>   Create a post
        </button>

        <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
          We predict flood chances throughout Hong Kong with a 100% accuracy. No cap.
        </p>
        
        <div>
          {#each data as post}
            <DiscussionPost title={post.title} content={post.content}/>
          {/each}  
        </div>
      </div>
  </div>
</section>

<div class="mb-3 pt-0">
  <textarea 
    type="text" 
    placeholder="Large Input" 
    class="h-200 px-3 py-4 text-left placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
    style="height: 300px"
  />
</div>