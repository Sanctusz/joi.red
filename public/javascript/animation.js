let text = ["JÓI", "ヨハン", "夜半", "よっぺ", "JÓHANN SVEINN INGASON"];

let textTL = gsap.timeline({ repeat: -1 });

text.forEach(t => {
	let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2, onRepeat: () => gsap.to('.dot', { opacity: 0, duration: 0, ease: 'none' }) });
	tl.to('.text', {
		duration: 1, text: t, onComplete: () => {
			gsap.from('.dot', { y: -100, opacity: 0 });
			gsap.to('.dot', {
				y: 0,
				opacity: 1,
				duration: 1,
				repeatDelay: 1,
				ease: "bounce",
				onComplete: () => { opacity: 0 }
			});
		}
	});
	textTL.add(tl);
});