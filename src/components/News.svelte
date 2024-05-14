<script>
  import { onMount } from "svelte";
  import axios from "axios";
  const NEWS_API_KEY = "199a7bec88034e6caae3d79550ec395a";
  let data = null;

  onMount(async () => {
    const response = await axios.get(
      "http://api.mediastack.com/v1/news",
      {
        params: {
          access_key: NEWS_API_KEY,
          countries: "hk"
        },
      }
    );
    
    data = response.data;
  })

</script>

<h1>DIT CU MAY</h1>
<p>{JSON.stringify(data)}</p>