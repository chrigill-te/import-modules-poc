const AsyncComp = defineAsyncComponent(
  () => import('http://localhost:8080/sharedComponents.js'.default.RunInstantTestButton)
)
