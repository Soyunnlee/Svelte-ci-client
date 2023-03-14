<script lang="ts">
	import "./style.css";
	import * as te from "tw-elements";
</script>

<div>
	<span on:click={() => document.body.classList.remove("dark")}>Light</span>
	<span on:click={() => document.body.classList.add("dark")}>Dark</span>
	<slot />
</div>

<style>
</style>
