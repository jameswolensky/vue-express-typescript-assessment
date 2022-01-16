<template>
    <div id="application">
		<v-app>
			<v-main>
				<router-view :key="$router.path"></router-view>
			</v-main>
		</v-app>
	</div>
</template>
<script lang="ts" src="./application.ts"></script>
