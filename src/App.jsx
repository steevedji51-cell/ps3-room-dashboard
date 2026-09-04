import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import GoalCard from './components/GoalCard'
import ContributionsCard from './components/ContributionsCard'
import RevenueCard from './components/RevenueCard'
import './App.css'

const App = () => {
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem('ps3_data')
    return stored
      ? JSON.parse(stored)
      : {
          cotisations: {
            Steeve: [0, 0, 0, 0, 0, 0, 0, 0],
            'Éphraïm': [0, 0, 0, 0, 0, 0, 0, 0],
            Pamela: [0, 0, 0, 0, 0, 0, 0, 0]
          },
          revenues: []
        }
  })

  useEffect(() => {
    localStorage.setItem('ps3_data', JSON.stringify(data))
  }, [data])

  const toggleCotisation = (member, monthIdx) => {
    setData(prev => ({
      ...prev,
      cotisations: {
        ...prev.cotisations,
        [member]: prev.cotisations[member].map((val, idx) =>
          idx === monthIdx ? (val === 1 ? 0 : 1) : val
        )
      }
    }))
  }

  const addRevenue = (amount, user) => {
    const today = new Date().toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit'
    })
    setData(prev => ({
      ...prev,
      revenues: [{ date: today, amount, user }, ...prev.revenues]
    }))
  }

  return (
    <div className="app">
      <Header />
      <main className="container">
        <GoalCard data={data} />
        <ContributionsCard data={data} onToggleCotisation={toggleCotisation} />
        <RevenueCard data={data} onAddRevenue={addRevenue} />
      </main>
    </div>
  )
}

export default App