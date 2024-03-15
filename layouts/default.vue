<template>
  <Html class="w-full h-screen">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="Nubex College" />
      <Link rel="icon" href="/assets/nubex_logo.png" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,600;0,700;1,400&family=Roboto+Serif:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700&display=swap"
        rel="preload"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,600;0,700;1,400&family=Roboto+Serif:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  </Html>
  <Body class="w-full h-full">
    <main class="w-full min-h-[800px]">
      <PageDefaultLinks />
      <PageNavBar />
      <slot></slot>
    </main>
    <Footer />
  </Body>
</template>

<script setup>
const title = ref('Nubex College');
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.font-rs {
  font-family: 'Roboto Serif', serif;
}

.font-pop {
  font-family: 'Poppins', sans-serif;
}
</style>
