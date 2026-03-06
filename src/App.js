import { useState } from 'react'
import DurationExercise from './components/DurationExercise/index.js';
import RepetitionExercise from './components/RepetitionExercise/index.js';
import BreathingExercise from './components/BreathingExercise/index.js';
import running from './assets/running.jpg'
import jumpingJacks from './assets/jumpingJacks.jpg'
import planks from './assets/planks.webp'
import pushUps from './assets/pushUps.jpg'
import squats from './assets/squats.jpg'
import breathing from './assets/breathing.jpg'

function App() {
  let exerciseList = [
    'Running',
    'Planks',
    'Jumping Jacks',
    'Push Ups',
    'Squats',
    'Breathing'
  ]

  let newRunning = {
    'title': 'Running',
    'picture': running
  },
    newJumpingJacks = {
      'title': 'Jumping Jacks',
      'picture': jumpingJacks
    },
    newPlanks = {
      'title': 'Planks',
      'picture': planks
    },
    newPushUps = {
      'title': 'Push Ups',
      'picture': pushUps
    },
    newSquats = {
      'title': 'Squats',
      'picture': squats
    },
    newBreathing = {
      'title': 'Breathing',
      'picture': breathing
    }

  let newExerciseList = [
    newRunning,
    newJumpingJacks,
    newPlanks,
    newPushUps,
    newSquats,
    newBreathing
  ]

  const [header, setHeader] = useState("Choose an exercise!");

  const newExercises = newExerciseList.map((item, i) => {
    return (
      <div key={i} onClick={() => { setHeader(item.title) }}>
        <div>
          <img src={item.picture} alt='an exercise' />
        </div>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          {item.title}
        </div>
      </div>
    )
  })

  return (
    <div style={{
      margin: '250px', borderWidth: 1, borderColor: 'black', borderStyle: 'solid'
    }}>
      <div className='header'>
        <h1>{header}</h1>
      </div>
      <div>
        {exerciseList.includes(header) ? null : <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly', marginLeft: 'auto', marginRight: 'auto' }}>{newExercises}</div>}

        {['Running', 'Planks'].includes(header) ? <DurationExercise setHeader={setHeader} /> : null}

        {['Jumping Jacks', 'Squats', 'Push Ups'].includes(header) ? <RepetitionExercise setHeader={setHeader} /> : null}

        {'Breathing'.includes(header) ? <BreathingExercise setHeader={setHeader} /> : null}
      </div>
    </div>
  )
}



export default App;
