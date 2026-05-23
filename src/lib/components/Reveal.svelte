<script>
  let { children, delay = 0, as = 'div', className = '', ...rest } = $props();
  let el = $state();
  let vis = $state(false);

  $effect(() => {
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          vis = true;
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  });

  let cls = $derived(`r ${vis ? 'in' : ''} ${delay ? `d${delay}` : ''} ${className}`);
</script>

<svelte:element this={as} bind:this={el} class={cls} {...rest}>
  {@render children()}
</svelte:element>
