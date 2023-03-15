<script lang="ts">
	import "./style.css";
	// import * as te from "tw-elements";
	function lightTheme() {
		document.body.classList.remove("dark");
	}
	function darkTheme() {
		document.body.classList.add("dark");
	}
</script>

<div>
	<slot />
	<style global lang="postcss">
		@tailwind base;
		@tailwind components;
		@tailwind utilities;
	</style>
</div>

<style>
</style>
