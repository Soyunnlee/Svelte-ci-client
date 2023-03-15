<script lang="ts">
	import Drawer from "svelte-drawer-component";
	let open = false;
</script>

<Drawer {open} size="50%" placement="left" on:clickAway={() => (open = false)}>
	<button class="close" on:click={() => (open = false)}>Close</button>
	<img src="https://picsum.photos/200?random=1" alt="In drawer" />
	<img src="https://picsum.photos/200?random=2" alt="In drawer" />
	<img src="https://picsum.photos/200?random=3" alt="In drawer" />
</Drawer>

<button on:click={() => (open = true)}>Open</button>
<h1>Svelte Drawer Demo</h1>
<h2>Click above to open</h2>
<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ad populum me vocas, eum. Res    
	tota, Torquate, non doctorum hominum, velle post mortem epulis celebrari memoriam sui nominis. Tu
	    vero, inquam, ducas licet, si sequetur; Suam denique cuique naturam esse ad vivendum ducem.
</p>
<p>
	Quae similitudo in genere etiam humano apparet. At hoc in eo M. Oratio me istius philosophi non
	    offendit; Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Quid censes in
	Latino     fore? Longum est enim ad omnia respondere, quae a te dicta sunt. Vitiosum est enim in
	dividendo     partem in genere numerare.
</p>
<p>
	Compensabatur, inquit, cum summis doloribus laetitia. Age nunc isti doceant, vel tu potius quis
	    enim ista melius? Nunc haec primum fortasse audientis servire debemus. Sin tantum modo ad
	indicia     veteris memoriae cognoscenda, curiosorum. Et quidem, Cato, hanc totam copiam iam
	Lucullo nostro     notam esse oportebit; An haec ab eo non dicuntur?
</p>
<p>
	Duo Reges: constructio interrete. Iubet igitur nos Pythius Apollo noscere nosmet ipsos. Summus    
	dolor plures dies manere non potest? Ita credo. Quae cum praeponunt, ut sit aliqua rerum selectio,
	    naturam videntur sequi; Tamen a proposito, inquam, aberramus. His singulis copiose responderi
	    solet, sed quae perspicua sunt longa esse non debent.
</p>
