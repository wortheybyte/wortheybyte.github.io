import homeHTML from '../compiled/home.in?raw'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${homeHTML}
  </div>
`
