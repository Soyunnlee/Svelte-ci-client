<script lang="ts">
	import Menu from "$lib/components/menu.svelte";
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
	console.log(data);

	// 사이드바 toggle
	let open = true;

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

<div class="flex">
	<!-- sideBar section -->
	<div
		class="bg-slate-800 h-screen p-5 
					{open ? 'w-72' : 'w-20'} pt-8 relative duration-300"
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
				class="h-8 w-8 bg-white absolute -right-4 top-9 rounded-full cursor-pointer 
							{!open && 'rotate-180'}"
			/>
		</div>
		<!-- User Info section-->
		<div class="text-white overflow-hidden {!open && 'block'} h-9">
			<Icon
				src={UserCircle}
				class="h-8 w-8 cursor-pointer block float-left duration-500"
			/>
			<h1
				class="text-2xl font-medium mt-0.5 ml-1 duration-100 block overflow-x-hidden
							{!open && 'scale-0'}"
			>
				User Info
			</h1>
		</div>
		<div
			class="bg-slate-300 flex rounded-md items-center duration-300 mt-6 box-border pl-2"
		>
			<Icon
				src={MagnifyingGlass}
				class="h-5 w-5 cursor-pointer block float-left duration-500 rounded-md bg-slate-300 mr-2 "
			/>
			<input
				type="text"
				placeholder="Search"
				class="w-full text-white focus:outline-none bg-transparent box-border pt-0.5 
							{!open && 'hidden'}"
			/>
		</div>
		<!-- Menu List section -->
		<ul class="pt-2">
			{#each Menus as menu, i}
				<a href={!menu.submenu ? `/info/${menu.title}` : ""}>
					<li
						class="text-white flex items-center gap-x-4 cursor-pointer p-2 duration-100 rounded-md mt-2 hover:bg-slate-300 
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
							<Icon
								src={menu.icon}
								class="h-8 w-8 text-white cursor-pointer -ml-1"
							/>
						</span>
						<span class="text-white {!open && 'hidden'} w-36">
							{menu.title}
						</span>
						{#if menu.submenu}
							<Icon
								src={ChevronDown}
								class="w-6 h-6 duration-200
											{menu.submenuOpen ? 'rotate-180' : 'rotate-0'}"
							/>
						{/if}
					</li>
					{#if menu.submenu && open}
						{#if menu.submenuItems}
							<ul
								class="overflow-hidden duration-200 mt-2 bg-slate-900 rounded-md"
								style="height:{menu.submenuOpen
									? `${40 * menu.submenuItems.length}px`
									: '0'}"
							>
								{#each menu.submenuItems as submenu}
									<a href="/info/{submenu.title}">
										<li
											class="text-white p-2 px-5 hover:bg-slate-300 rounded-md duration-100 cursor-pointer"
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
		<div class="p-8 bg-slate-800 h-20 border-l-2 duration-500">
			<h1 class="text-2xl font-semibold text-white">Nav</h1>
		</div>
		<main>{data.params}</main>
		<Menu information={data.params} />
	</div>
</div>
