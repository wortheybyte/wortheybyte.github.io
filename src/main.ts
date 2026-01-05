import homeHTML from '../compiled/home.in?raw'
import './style.css'

interface IGame {
  Title: string
  Date: string
  ImageURL: string
}

const games: IGame[] = [
  {
    Title: 'Minecraft',
    Date: '2017–2022',
    ImageURL: 'games/minecraft.jpg'
  },
  {
    Title: 'Minecraft Dungeons',
    Date: '2019',
    ImageURL: 'games/dungeons.jpg'
  },
  {
    Title: 'Minecraft Legends',
    Date: '2019–2022',
    ImageURL: 'games/legends.jpg'
  },
  {
    Title: 'Age of Empires: Definitive Edition',
    Date: '2017',
    ImageURL: 'games/aoe.jpg'
  },
  {
    Title: 'Crackdown 3',
    Date: '2017',
    ImageURL: 'games/crackdown3.jpg'
  },
  {
    Title: 'Microsoft Solitaire Collection',
    Date: '2016',
    ImageURL: 'games/solitaire.jpg'
  },
  {
    Title: 'Forza Motorsport 7',
    Date: '2016',
    ImageURL: 'games/forza7.jpg'
  },
  {
    Title: 'Forza Horizon 4',
    Date: '2017',
    ImageURL: 'games/forzah4.jpg'
  },
  {
    Title: 'Forza Street',
    Date: '2017',
    ImageURL: 'games/street.jpg'
  }
];

function renderGame(game: IGame) {
  return `
    <div class="game">
      <img class="game-image" src="${game.ImageURL}"/>
      <div class="game-overlay">
        <div class="game-info">
          <div class="game-title">${game.Title}</div>
          <div class="game-date">${game.Date}</div>
          <div class="game-button-container">
            <button class="game-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderGames(games: IGame[]) {
  const gamesHTML = games.map(g => renderGame(g)).join('\n')
  return `
    <div class="games">
      ${gamesHTML}
    </div>
  `
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <h1><span class="span__brackets">{</span>patrick<span class="span__brackets">}</span> <span class="span__last-name">worthey!</span></h1>
    <div id="purr-container" class="div__purr-container"></div>
    <div id="neko-container" class="div__neko-container">
      <img id="neko-frame1" class="img__neko-show" src="neko/sleep1.png"/>
      <img id="neko-frame2" class="img__neko-hide" src="neko/sleep2.png"/>
    </div>
    <p class="subtitle"><em>Data/software engineer</em>, with multiple top-selling video game title credits</p>
    <h2>Professional Projects</h2>
    ${renderGames(games)}
    <div>
      <h2>Resume Download</h2>
      <button>Download</button>
    </div>
    <div>
      <h2>Personal Projects</h2>
      <button>View Personal Projects</button>
    </div>
  </main>
`

function spawnTempText(root: HTMLElement, className: string, text: string, startDelay: number, duration: number) {
  setTimeout(() => {
    let el = document.createElement('div')
    el.innerText = text
    el.className = className
    const rect = root.getBoundingClientRect()
    const x = Math.random() * rect.width
    const y = Math.random() * rect.height
    const rot = Math.random() * 0.25 - 0.125;
    el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}turn)`;
    root.appendChild(el)
    setTimeout(() => {
      root.removeChild(el)
    }, duration)
  }, startDelay)
}

const purrSound = new Audio('neko/sleep.wav');
const nekoContainer = document.getElementById('neko-container')
const purrContainer = document.getElementById('purr-container')

function onNekoClick() {
  purrSound.play()
  if (!purrContainer) {
    return
  }

  for (let i = 0; i < 4; ++i) {
    spawnTempText(
      purrContainer,
      'div__purr',
      '*purr*',
      Math.random() * 2000,
      Math.random() * 1000 + 300
    )
  }
  for (let i = 0; i < 4; ++i) {
    spawnTempText(
      purrContainer,
      'div__purr',
      '*purr*',
      Math.random() * 2000 + 3000,
      Math.random() * 1000 + 300
    )
  }
}

nekoContainer?.addEventListener('click', () => onNekoClick())

const nekoFrame1 = document.getElementById('neko-frame1')
const nekoFrame2 = document.getElementById('neko-frame2')
let frame = false
const frameDuration = 1000

function step() {
  frame = !frame
  nekoFrame1!.className = frame ? "img__neko-hide" : "img__neko-show"
  nekoFrame2!.className = frame ? "img__neko-show" : "img__neko-hide"
  setTimeout(step, frameDuration)
}

setTimeout(step, frameDuration)