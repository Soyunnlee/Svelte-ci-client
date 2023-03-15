<script lang="ts">
	let open = true;
</script>

<div class="flex">
	<div class="bg-blue-900 h-screen p-5 {open ? 'w-72' : 'w-20'} pt-8 relative duration-300">
		<div>
			<svg
				on:click={() => (open = !open)}
				on:keydown={() => (open = !open)}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-8 w-8 bg-white absolute -right-4 top-9 rounded-full cursor-pointer {!open &&
					'rotate-180'}"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<div class="inline-flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-8 w-8 text-white cursor-pointer block float-left duration-500 {open &&
						'rotate-[360deg]'}"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
					/>
				</svg>
				<h1
					class="text-white text-2xl origin-left font-medium mt-0.5 ml-1 duration-300                {!open &&
						'scale-0'}"
				>
					Menu
				</h1>
			</div>
		</div>
		<div class="bg-slate-300 flex rounded-md items-center duration-300">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-8 w-8 cursor-pointer block float-left duration-500 rounded-md bg-slate-300 "
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
				/>
			</svg>
			<input
				type="search"
				placeholder="Search"
				class="text-base w-full text-white focus:outline-none bg-transparent"
			/>
		</div>
	</div>
	<div class="p-8"><h1 class="text-2xl font-semibold">HomePage</h1></div>
</div>
