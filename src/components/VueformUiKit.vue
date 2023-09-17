<template>
  <div>
    <Vueform v-model="sizeForm" sync add-class="mb-10 mx-auto max-w-[180px]">
      <RadiogroupElement
        name="size"
        view="tabs"
        :items="['sm', 'md', 'lg']"
      />
    </Vueform>

    <Vueform
      :size="size"
      :steps-controls="false"
      :steps="{
        personal: { label: 'Personal details', },
        contact: { label: 'Contact details' },
        social: { label: 'Social' },
      }"
      @mounted="handleStepsMounted"
    />

    <Vueform
      :display-errors="false"
      :columns="{ label: 12 }"
      :size="size"
      :schema="schema"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const sizeForm = ref({
  size: 'md'
})

const fields = ref([
  {
    type: 'text',
    default: 'Value',
    placeholder: 'Placeholder',
    loading: true,
    rules: 'email',
    columns: 6,
  },
  {
    type: 'text',
    placeholder: 'Disabled',
    default: 'Disabled',
    disabled: true,
    columns: 6,
  },
  {
    type: 'text',
    placeholder: 'Danger',
    default: 'Danger',
    columns: 6,
    rules: 'min:10',
    onMounted(el$) {
      setTimeout(() => {
        el$.validate()
      }, 0);
    }
  },
  {
    type: 'text',
    placeholder: 'Success',
    default: 'Success',
    rules: 'required',
    columns: 6,
    onMounted(el$) {
      setTimeout(() => {
        el$.validate()
        el$.messageBag.append('Success message', 'message')
      }, 0);
    }
  },
  {
    type: 'dates',
    mode: 'range',
    default: ['2020-12-24', '2020-12-31'],
    addons: {
      before: '<img src="/calendar-regular.svg" width="14" />'
    },
    placeholder: 'Datepicker',
    columns: 6,
  },
  {
    type: 'location',
    placeholder: 'Location',
    addons: {
      before: '<img src="/map-marker-alt-solid.svg" width="14" />'
    },
    columns: 6,
  },
  {
    type: 'select',
    items: ['Vue.js', 'React', 'AngularJS'],
    search: true,
    default: 'Vue.js',
    placeholder: 'Select',
    hideSelected: false,
    closeOnSelect: false,
    columns: 6,
  },
  {
    type: 'select',
    items: ['Vue.js', 'React', 'AngularJS'],
    default: 'Vue.js',
    placeholder: 'Native select',
    columns: 6,
  },
  {
    type: 'tags',
    items: ['Vue.js', 'React', 'AngularJS'],
    default: ['Vue.js'],
    placeholder: 'Tags',
    hideSelected: false,
    closeOnSelect: false,
    columns: 6,
  },
  {
    type: 'tags',
    items: ['Vue.js', 'React', 'AngularJS'],
    default: ['Vue.js'],
    placeholder: 'Disabled tags',
    hideSelected: false,
    closeOnSelect: false,
    disabled: true,
    columns: 6,
  },
  {
    type: 'multiselect',
    items: ['Vue.js', 'React', 'AngularJS', 'Bootstrap', 'Tailwind', 'Material', 'Bulma'],
    search: true,
    default: ['Vue.js', 'React'],
    placeholder: 'Multiselect',
    hideSelected: false,
    closeOnSelect: false,
    columns: 6,
    addClass: 'mb-60 z-0',
    onMounted(el$) {
      setTimeout(() => {
        el$.input.isOpen = true

        el$.on('close', () => {
          el$.input.isOpen = true
        })
      }, 0)
    }
  },
  {
    type: 'multiselect',
    items: [
      {
        label: 'Frontend frameworks',
        items: ['Vue.js', 'React', 'AngularJS'],
      },
      {
        label: 'CSS frameworks',
        items: ['Bootstrap', 'Tailwind', 'Material', 'Bulma'],
      },
    ],
    search: true,
    groups: true,
    default: ['Vue.js', 'React', 'AngularJS'],
    placeholder: 'Multiselect with groups',
    hideSelected: false,
    closeOnSelect: false,
    columns: 6,
    addClass: 'mb-60',
    onMounted(el$) {
      setTimeout(() => {
        el$.input.isOpen = true

        el$.on('close', () => {
          el$.input.isOpen = true
        })
      }, 0)
    }
  },
  {
    type: 'textarea',
    placeholder: 'Placeholder',
    default: 'Some text',
    rows: 6,
    columns: 6,
  },
  {
    type: 'editor',
    default: 'Rich text editor',
    columns: 6,
  },
  {
    type: 'button',
    primary: true,
    buttonLabel: 'PRIMARY',
    buttonClass: 'w-full',
    columns: 3,
  },
  {
    type: 'button',
    primary: true,
    loading: true,
    buttonClass: 'w-full',
    buttonLabel: 'PRIMARY',
    columns: 3,
  },
  {
    type: 'button',
    secondary: true,
    buttonLabel: 'SECONDARY',
    buttonClass: 'w-full',
    columns: 3,
  },
  {
    type: 'button',
    secondary: true,
    loading: true,
    buttonLabel: 'SECONDARY',
    buttonClass: 'w-full',
    columns: 3,
  },
  {
    type: 'static',
  },
  {
    type: 'toggle',
    text: 'Unchecked',
    labels: {
      on: 'On',
      off: 'Off',
    },
    columns: 5,
  },
  {
    type: 'checkbox',
    text: 'Unchecked',
    columns: 4,
  },
  {
    type: 'radio',
    text: 'Unchecked',
    columns: 3,
  },
  {
    type: 'toggle',
    text: 'Checked',
    labels: {
      on: 'On',
      off: 'Off',
    },
    default: true,
    columns: 5,
  },
  {
    type: 'checkbox',
    default: true,
    text: 'Checked',
    columns: 4,
  },
  {
    type: 'radio',
    default: 1,
    text: 'Checked',
    columns: 3,
  },
  {
    type: 'toggle',
    text: 'Disabled',
    labels: {
      on: 'On',
      off: 'Off',
    },
    disabled: true,
    columns: 5,
  },
  {
    type: 'checkbox',
    disabled: true,
    text: 'Disabled',
    columns: 4,
  },
  {
    type: 'radio',
    text: 'Disabled',
    disabled: true,
    columns: 3,
  },
  {
    type: 'toggle',
    text: 'Disabled',
    labels: {
      on: 'On',
      off: 'Off',
    },
    default: true,
    disabled: true,
    columns: 5,
  },
  {
    type: 'checkbox',
    default: true,
    text: 'Disabled',
    disabled: true,
    columns: 4,
  },
  {
    type: 'radio',
    default: 1,
    text: 'Disabled',
    disabled: true,
    columns: 3,
  },
  {
    type: 'static',
    content: '&nbsp;'
  },
  {
    type: 'slider',
    default: 50,
    columns: 6,
  },
  {
    type: 'slider',
    default: [20,40,70],
    merge: 20,
    columns: 6,
    format: {
      decimals: 2,
      prefix: '$'
    }
  },
  {
    type: 'static',
  },
  {
    type: 'checkboxgroup',
    default: ['Vue.js'],
    items: ['Vue.js', 'React', 'AngularJS'],
    view: 'tabs',
    columns: 6,
  },
  {
    type: 'radiogroup',
    default: 'Vue.js',
    disabled: true,
    items: ['Vue.js', 'React', 'AngularJS'],
    view: 'tabs',
    columns: 6,
  },
  {
    type: 'checkboxgroup',
    default: ['Vue.js'],
    items: [
      {
        value: 'Vue.js',
        name: 'Vue.js',
        description: 'Vue.js framework'
      },
      {
        value: 'React',
        name: 'React',
        description: 'React framework'
      },
      {
        value: 'AngularJS',
        name: 'AngularJS',
        description: 'AngularJS framework'
      },
    ],
    view: 'blocks',
    columns: 6,
  },
  {
    type: 'radiogroup',
    default: 'Vue.js',
    disabled: true,
    items: [
      {
        value: 'Vue.js',
        name: 'Vue.js',
        description: 'Vue.js framework'
      },
      {
        value: 'React',
        name: 'React',
        description: 'React framework'
      },
      {
        value: 'AngularJS',
        name: 'AngularJS',
        description: 'AngularJS framework'
      },
    ],
    view: 'blocks',
    columns: 6,
  },
  {
    type: 'file',
    drop: true,
    columns: 6,
  },
  {
    type: 'multifile',
    columns: 6,
    view: 'image',
    file: {
      auto: false,
      clickable: false,
      previewUrl: '/'
    },
    controls: {
      add: false,
    },
    addClass: '-form-mt-0.5gutter',
    clickable: false,
    default: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
    ],
  },
])

const size = computed(() => {
  return sizeForm.value.size
})

const schema = computed(() => {
  let schema = {}

  fields.value.forEach((f, i) => {
    schema['field-'+i] = f
  })

  return schema
})

const handleStepsMounted = (form$) => {
  setTimeout(() => {
    form$.steps$.steps$.personal.complete()
    form$.steps$.next()
  }, 100)
}
</script>

<style lang="scss">
  .ui-kit-h2 {
    font-size: 28px;
    margin: 12px 0 12px;
    line-height: 1.5;
    font-weight: 600;
  }

  .ui-kit-h3 {
    font-size: 21px;
    margin: 4px 0 4px;
    line-height: 1.5;
    font-weight: 600;
  }
</style>