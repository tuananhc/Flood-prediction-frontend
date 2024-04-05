<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";
</script>

<!-- Header -->
<div class="relative bg-violet-950 md:pt-32 pb-32 pt-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="RAINFALL ALERT"
            statTitle="AMBER"
            statArrow="up"
            statPercent="60mm rainfall"
            statPercentColor="text-orange-500"
            statDescripiron="in the past hour"
            statIconName="fas fa-cloud-showers-heavy"
            statIconColor="bg-orange-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="FLOODING DANGER"
            statTitle="LOW"
            statArrow="down"
            statPercent="Rain expected to stop"
            statPercentColor="text-emerald-500"
            statDescripiron="in two hours"
            statIconName="fas fa-water"
            statIconColor="bg-red-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="WIND STRENGTH"
            statTitle="LIGHT"
            statArrow="up"
            statPercent="10MPH"
            statPercentColor="text-sky-500"
            statDescripiron="light breeze with rainfall"
            statIconName="fas fa-wind"
            statIconColor="bg-sky-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="CURRENT TEMP"
            statTitle="35°C"
            statArrow="up"
            statPercent="+3°C"
            statPercentColor="text-blue-800"
            statDescripiron="since yesterday"
            statIconName="fas fa-cloud-sun-rain"
            statIconColor="bg-blue-800"
          />
        </div>
      </div>
    </div>
  </div>
</div>
