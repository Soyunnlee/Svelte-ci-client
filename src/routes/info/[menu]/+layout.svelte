<script lang="ts">
	import {
		Icon,
		ArrowLeftCircle,
		UserCircle,
		ChartPie,
		MagnifyingGlass,
		Document,
		PlayCircle,
		CircleStack,
		ChartBar,
		Inbox,
		Cog6Tooth,
		ArrowRightOnRectangle,
		ChevronDown,
		Sun,
		type IconSource,
	} from "svelte-hero-icons";

	// menu 인터페이스
	type submenu = {
		title: string;
	};
	interface menuType {
		title: string;
		icon: IconSource;
		submenu?: boolean;
		submenuOpen?: boolean;
		submenuItems?: Array<submenu>;
		spacing?: boolean;
	}

	// load 에서 params 에 따라 받아올 데이터
	export let data;
	// console.log(data);

	// 사이드바 toggle
	let open = true;

	// Theme --> store 로 빼서 전역적으로 줄 것.
	let themeColor = {
		dark: {
			bg: "bg-slate-800",
			submenuBg: "bg-slate-900",
			text: "text-white",
		},
		light: {
			bg: "bg-slate-100",
			submenuBg: "bg-slate-200",
			text: "text-black",
		},
	};
	let darkTheme = true;
	// console.log(darkTheme);

	// menu 정의
	const Menus: Array<menuType> = [
		{ title: "Dashboard", icon: ChartPie },
		{ title: "Pages", icon: Document },
		{ title: "Media", spacing: true, icon: PlayCircle },
		{
			title: "Projects",
			icon: CircleStack,
			submenu: true,
			submenuOpen: false,
			submenuItems: [
				{ title: "Submenu1" },
				{ title: "Submenu2" },
				{ title: "Submenu3" },
			],
		},
		{
			title: "Analytics",
			icon: ChartBar,
			submenu: true,
			submenuOpen: false,
			submenuItems: [
				{ title: "Sub1" },
				{ title: "Sub2" },
				{ title: "Sub3" },
				{ title: "Sub4" },
			],
		},
		{ title: "Inbox", icon: Inbox },
		{ title: "Profile", spacing: true, icon: UserCircle },
		{ title: "Setting", icon: Cog6Tooth },
		{ title: "Logout", icon: ArrowRightOnRectangle },
	];
</script>

<div class="flex {darkTheme ? themeColor.dark.text : themeColor.light.text}">
	<!-- sideBar section -->
	<div
		class="{darkTheme ? themeColor.dark.bg : themeColor.light.bg} h-screen p-5 
					{open ? 'w-72' : 'w-20'} pt-8 relative duration-200"
	>
		<!-- sideBar Toggle -->
		<div
			on:click={() => {
				if (open) {
					Menus.forEach((data) => (data.submenuOpen = false));
					open = false;
				} else {
					open = true;
				}
			}}
			on:keydown={() => {
				if (open) {
					Menus.forEach((data) => (data.submenuOpen = false));
					open = false;
				} else {
					open = true;
				}
			}}
		>
			<Icon
				src={ArrowLeftCircle}
				class="h-8 w-8 bg-white absolute -right-4 top-9 rounded-full cursor-pointer text-black duration-200
							{!open && 'rotate-180'}"
			/>
		</div>
		<!-- User Info section-->
		<div class=" overflow-hidden {!open && 'block'} h-9">
			<Icon
				src={UserCircle}
				class="h-8 w-8 cursor-pointer block float-left duration-200"
			/>
			<h1
				class="text-2xl font-medium mt-0.5 ml-1 duration-200 block overflow-x-hidden
							{!open && 'scale-0'}"
			>
				User Info
			</h1>
		</div>
		<div
			class="bg-slate-300 flex rounded-md items-center duration-200 mt-6 box-border pl-2"
		>
			<Icon
				src={MagnifyingGlass}
				class="h-5 w-5 cursor-pointer block float-left duration-200 rounded-md bg-slate-300 mr-2 "
			/>
			<input
				type="text"
				placeholder="Search"
				class="w-full  focus:outline-none bg-transparent box-border pt-0.5 
							{!open && 'hidden'}"
			/>
		</div>
		<!-- Menu List section -->
		<ul class="pt-2">
			{#each Menus as menu, i}
				<a href={!menu.submenu ? `/info/${menu.title}` : ""}>
					<li
						class=" flex items-center gap-x-4 cursor-pointer p-2 duration-200 rounded-md mt-2 hover:bg-slate-300 hover:text-black
						{menu.spacing ? 'mt-9' : 'mt-2'}"
						on:click={menu.submenu
							? () => {
									// Another menu close function
									Menus.filter((_, idx) => i !== idx).forEach(
										(data) => (data.submenuOpen = false),
									);
									menu.submenuOpen = !menu.submenuOpen;
									open = true;
							  }
							: null}
						on:keydown={menu.submenu
							? () => {
									// Another menu close function
									Menus.filter((_, idx) => i !== idx).forEach(
										(data) => (data.submenuOpen = false),
									);
									menu.submenuOpen = !menu.submenuOpen;
									open = true;
							  }
							: null}
					>
						<span>
							<Icon src={menu.icon} class="h-8 w-8  cursor-pointer -ml-1" />
						</span>
						<span class="{!open && 'hidden'} w-36">
							{menu.title}
						</span>
						{#if menu.submenu}
							<Icon
								src={ChevronDown}
								class="w-6 h-6 duration-200
											{menu.submenuOpen ? 'rotate-180' : 'rotate-0'}
											{!open && 'hidden'}"
							/>
						{/if}
					</li>
					{#if menu.submenu && open}
						{#if menu.submenuItems}
							<ul
								class="overflow-hidden duration-200 mt-2 rounded-md
                  {darkTheme
									? themeColor.dark.submenuBg
									: themeColor.light.submenuBg}
                  "
								style="height:{menu.submenuOpen
									? `${40 * menu.submenuItems.length}px`
									: '0'}"
							>
								{#each menu.submenuItems as submenu}
									<a href="/info/{menu.title}/{submenu.title}">
										<li
											class="p-2 px-5 hover:bg-slate-300 rounded-md duration-200 cursor-pointer hover:text-black"
										>
											{submenu.title}
										</li>
									</a>
								{/each}
							</ul>
						{/if}
					{/if}
				</a>
			{/each}
		</ul>
	</div>
	<div class="flex flex-col w-full">
		<div
			class="p-8  h-20 border-l-2 duration-200 flex justify-around
      {darkTheme ? themeColor.dark.bg : themeColor.light.bg}
      {darkTheme ? themeColor.dark.text : themeColor.light.text}"
		>
			<h1 class="text-2xl font-semibold ">Nav</h1>
			<span
				on:click={() => (darkTheme = !darkTheme)}
				on:keydown={() => (darkTheme = !darkTheme)}
				class="cursor-pointer"
			>
				<Icon src={Sun} class="h-8 w-8" />
			</span>
		</div>
		<slot />
	</div>
</div>
