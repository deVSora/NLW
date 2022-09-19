import { useState, useEffect } from 'react'

import { GameController, MagnifyingGlassPlus } from 'phosphor-react'
import "./styles/main.css"
import { GameBanner } from './components/GameBanner'
import * as Dialog from '@radix-ui/react-dialog'

import logo from './assets/logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { Input } from './components/form/Input'
import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'


export interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios.get('http://localhost:8000/games').then(response =>
      setGames(response.data)
    )
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <img src={logo} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div >
  )
}

export default App
