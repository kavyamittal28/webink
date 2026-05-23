<script>
  let { id, altText = "Project screenshot" } = $props();

  // 1. Vite scans your local asset folder for all matching extensions
  const images = import.meta.glob("/src/lib/assets/*.{jpg,jpeg,png,webp}", {
    eager: true,
    query: "?url",
  });

  // 2. Find the key that contains your specific project ID
  // Example: loops through keys until it finds one ending with '/cowbell.png' or '/cowbell.jpg'
  const matchedKey = Object.keys(images).find(
    (path) =>
      path.endsWith(`/${id}.jpg`) ||
      path.endsWith(`/${id}.jpeg`) ||
      path.endsWith(`/${id}.png`) ||
      path.endsWith(`/${id}.webp`),
  );

  // 3. Extract the clean URL string
  const imageSrc = matchedKey
    ? images[matchedKey]?.default || images[matchedKey]
    : "";
</script>

{#if imageSrc}
  <img
    src={imageSrc}
    alt={altText}
    class="art"
    loading="lazy"
    decoding="async"
  />
{:else}
  <div class="art placeholder"></div>
{/if}

<style>
  .art {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .placeholder {
    background: linear-gradient(135deg, var(--bg-2), var(--line));
  }
</style>
