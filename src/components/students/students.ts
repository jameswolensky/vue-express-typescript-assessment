import { Component, Vue, Watch } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  name: 'Students',
  computed: mapState('homeStore', ['students'])
})

export default class Students extends Vue {
	students: any

	data (): any {
	  return {
	    nameSearch: '',
	    tagSearch: '',
	    averageHash: {},
	    toggleHash: {},
	    tagHash: {}
	  }
	}

	@Watch('students')
	onStudentsChange (payload: any[]): void {
	  if (payload.length) {
	    for (let i = 0; i < payload.length; i++) {
	      // Tag hash
	      Vue.set(this.$data.tagHash, payload[i].id, [])

	      // Toggle hash
	      Vue.set(this.$data.toggleHash, payload[i].id, false)

	      // Average hash
	      const numberOfGrades = payload[i].grades.length
	      const gradesSum = payload[i].grades.reduce((a: string, b: string) => parseFloat(a) + parseFloat(b))
	      Vue.set(this.$data.averageHash, payload[i].id, (gradesSum / numberOfGrades).toFixed(2))
	    }
	  }
	}

	handleShowStudentBottom (studentId: string): void {
	  if (this.$data.toggleHash[studentId]) {
	    this.$data.toggleHash[studentId] = false
	  } else {
	    this.$data.toggleHash[studentId] = true
	  }
	}

	handleAddTag (student: Record<string, string>): void {
	  if (!student.currentTag) return
	  this.$data.tagHash[student.id].push(student.currentTag)
	  student.currentTag = ''
	}

	get filteredStudents (): [] {
	  const nameSearch = this.$data.nameSearch.toLowerCase().replace(/\s/g, '')
	  const tagSearch = this.$data.tagSearch.toLowerCase().replace(/\s/g, '')
	  if (nameSearch === '' && tagSearch === '') return this.students
	  return this.students.filter(student => {
	    const fullName = (student.firstName + student.lastName).toLowerCase().replace(/\s/g, '')
	    const tags = this.$data.tagHash[student.id].join('').toLowerCase().replace(/\s/g, '')
	    return (fullName !== '' ? fullName.indexOf(nameSearch) !== -1 : true) && (tagSearch !== '' ? tags.indexOf(tagSearch) !== -1 : true)
	  })
	}

	mounted (): void {
	  this.$store.dispatch('homeStore/getStudents')
	}
}
