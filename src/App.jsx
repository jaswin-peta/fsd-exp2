import ButtonClickHandler from './pages/ButtonClickHandler'
import CounterClass from './pages/CounterClass'
import ConditionalRender from './pages/ConditionalRender'
import FunctionalCounter from './pages/FunctionalCounter'
import StringLiterals from './pages/StringLiterals'
import './App.css'

const experiments = [
  { number: 1, title: 'Class Component Counter', Component: CounterClass },
  { number: 2, title: 'Functional Component Counter', Component: FunctionalCounter },
  { number: 3, title: 'Button Click Event', Component: ButtonClickHandler },
  { number: 4, title: 'Conditional Rendering', Component: ConditionalRender },
  { number: 5, title: 'String Literals', Component: StringLiterals },
]

function App() {
  return (
    <div className="app-shell">
      <header className="lab-header">
        <p className="eyebrow">REACT.JS · LIVE DEMOS</p>
        <h1>Experiment 2</h1>
      </header>

      <main className="experiment-list">
        {experiments.map(({ number, title, Component }) => (
          <article className="experiment-card" key={number}>
            <h2>
              <span className="experiment-number">{number}</span>
              {title}
            </h2>
            <section className="demo-panel" aria-label={`${title} output`}>
              <Component />
            </section>
          </article>
        ))}
      </main>
    </div>
  )
}

export default App
