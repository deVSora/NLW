interface GameBannerProps {
    bannerUrl: string
    title: string
    adsCount: number
}

export function GameBanner(props: GameBannerProps) {
    let adText = 'Sem anúncios'
    if (props.adsCount != 0) {
        adText = props.adsCount > 1 ? 'anúncios' : 'anúncio'
    }
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
            <img src={props.bannerUrl} alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{props.title}</strong>
                <span className="text-sm text-zinc-300 block">{props.adsCount != 0 ? props.adsCount : null} {adText}</span>
            </div>
        </a>
    )
}