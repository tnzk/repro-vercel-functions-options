<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/api/search.json`).then((r) => r.json());
    return { props: { res: res } };
  }
</script>
<script>
  export let res;
</script>
<svelte:head>
  <title>repro-vercel-functions-options</title>
</svelte:head>

{JSON.stringify(res)}