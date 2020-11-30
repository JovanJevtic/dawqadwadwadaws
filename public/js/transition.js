const transition = () => {
    const tl = gsap.timeline({ defaults: { ease: "power1.easeInOut" }})
    const tl2 = gsap.timeline({ defaults: { ease: "power3.easeIn" }})
    
    const rule = CSSRulePlugin.getRule('.span-landing:after')

    tl.from('#heading', { y: 50, opacity: 0 , duration: .5, delay: 3.5 })
        .from('.subheading', { y: 20, opacity: 0 , duration: 1 }, '-=.4')
        .to(rule, { duration: 1, cssRule: { scaleY: 0 }}, '-=.1' )   

    tl2.to(".text", { y: "0%", duration: .7, stagger: 0.35 })
        .to(".opening-scene", { scale: 1.5, duration: .5 })
        .to(".opening-scene", { y: '100%', opacity: 0 , duration: .5 })
        .to('.cover-bar', { y: '-100%', duration: 1, stagger: 0.25, delay: 0.4 })

}

export default transition;