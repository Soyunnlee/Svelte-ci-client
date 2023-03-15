<script lang="ts">
	import "./style.css";
	import "tw-elements";
	function lightTheme() {
		document.body.classList.remove("dark");
	}
	function darkTheme() {
		document.body.classList.add("dark");
	}
</script>

<div>
	<span on:click={lightTheme} on:keydown={lightTheme}>Light</span>
	<span on:click={darkTheme} on:keydown={lightTheme}>Dark</span>
	<slot />

	<style global lang="postcss">
		@tailwind base;
		@tailwind components;
		@tailwind utilities;
	</style>
</div>
