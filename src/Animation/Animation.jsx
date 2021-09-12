
export const HeaderAnimation={
    hidden:{y: -100,},
    show: {y:0},
    transition: {
        type: "spring",
        damping: 10
    }
}

export const SectionAnimation={
    hidden:{opacity:0, scale: .5},
    show: {opacity: 1, scale: 1},
    transition: {
        type: "spring",
        damping: 10,
        staggerChildren: 0.5
    }
}

export const BoxAnimation={
    hidden:{opacity:0, scale: .5},
    show: {opacity: 1, scale: 1},
}