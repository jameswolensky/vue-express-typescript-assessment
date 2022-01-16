import Vue from 'vue'

Vue.component(
  'students',
  () => import('@/components/students/students.vue')
)
