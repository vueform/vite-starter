<template>
  <div class="w-full h-screen flex justify-center items-center">
    <Vueform
      class="w-80 mx-auto shadow-lg rounded-xl px-10 py-12"
      :columns="{label:3}"
      :display-errors="false"
      :endpoint="false"
      @submit="handleSubmit"
    >
      <StaticElement>
        <div class="flex flex-col items-center w-full mb-8">
          <img src="src/assets/logo.svg" class="w-20 mx-auto block">
          <h1 class="text-xl font-semibold mx-auto mt-3">Login</h1>
        </div>
      </StaticElement>
      <TextElement
        name="email"
        placeholder="Email address"
        default="john@doe.com"
        rules="required|email"
      />
      <TextElement
        name="password"
        input-type="password"
        placeholder="Password"
        rules="required"
      />
      <ToggleElement name="remember_me" class="mb-4 text-sm">
        Remember me
      </ToggleElement>
      <ButtonElement name="login" button-class="w-full" submits>
        Login
      </ButtonElement>
    </Vueform>
  </div>
</template>

<script>
  export default {
    name: 'VueformDemo',
    methods: {
      handleSubmit(form$) {
        alert(JSON.stringify(form$.data))
      }
    }
  }
</script>
