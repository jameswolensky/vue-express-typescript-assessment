<template>
	<div>
		<v-row no-gutters>
			<v-col cols="12">
				<v-text-field label="Search by name" v-model="nameSearch" />
			</v-col>
			<v-col cols="12">
				<v-text-field label="Search by tag" v-model="tagSearch" />
			</v-col>
		</v-row>
		<v-row v-for="(student, key) in filteredStudents" :key="key" class="pa-5">
			<v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2" class="d-flex justify-start align-center pa-0">
				<img src="/images/person.svg" height="125px" width="125px" class="border-2-grey border-circle"/>
			</v-col>
			<v-col cols="9">
				<span class="name-header">{{ student.firstName }} {{ student.lastName }}</span>
				<div class="ml-3 mt-3 d-flex flex-column">
				<span>Email: {{ student.email }}</span>
				<span>Company: {{ student.company }}</span>
				<span>Skill: {{ student.skill }}</span>
				<span>Average: {{ averageHash[student.id] }}%</span>
				</div>
			</v-col>
			<v-col cols class="d-flex justify-end align-start pa-0">
				<v-icon v-if="!toggleHash[student.id]" large @click="handleShowStudentBottom(student.id)">mdi-plus</v-icon>
				<v-icon v-else large @click="handleShowStudentBottom(student.id)">mdi-minus</v-icon>
			</v-col>
			<v-col cols="9" offset-lg="2" v-if="toggleHash[student.id]">
				<div v-for="(grade, key) in student.grades" :key="key" class="ml-3">
				Test {{ key + 1 }}: <span class="ml-3">{{ grade }}</span>
				</div>
			</v-col>
			<v-col cols="9" offset-lg="2">
				<div class="ml-3">
				<span v-if="tagHash[student.id] && tagHash[student.id].length > 0">
					<v-btn small v-for="(tag, key) in tagHash[student.id]" :key="key" class="tag">
					{{ tag }}
					</v-btn>
				</span>
				</div>
			</v-col>
			<v-col cols="9" offset-lg="2">
				<div class="ml-3">
				<v-row>
					<v-col cols="6">
					<v-text-field label="Add a tag" v-model="student.currentTag"  @keydown.enter="handleAddTag(student)" />
					</v-col>
				</v-row>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts" src="./students.ts"></script>

<style lang="scss" scoped>
  .name-header {
    font-size: 40px;
    font-weight: 900;
    color: black;
  }
  .tag {
	  text-transform: initial;
  }
</style>
