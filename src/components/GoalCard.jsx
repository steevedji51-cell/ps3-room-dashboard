import React from 'react'
import './GoalCard.css'

const GoalCard = ({ data }) => {
  const TARGET = 264000
  const MONTHS = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8']

  let totalCotise = 0
  Object.values(data.cotisations).forEach(months => {
    months.forEach((val, idx) => {
      if (val === 1) {
        totalCotise += idx === 7 ? 8000 : 10000
      }
    })
  })

  const remaining = Math.max(0, TARGET - totalCotise)
  const pct = Math.min(100, Math.round((totalCotise / TARGET) * 100))

  return (
    <div className="card goal-card">
      <div className="card-title">
        <span>Objectif Matériel (Phase 1)</span>
        <span className="target-txt">{totalCotise.toLocaleString()} / {TARGET.toLocaleString()} F</span>
      </div>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${pct}%` }}></div>
      </div>
      <div className="progress-info">
        <span>Reste à financer : <strong className="remaining-txt">{remaining.toLocaleString()} F</strong></span>
        <span className="percent-txt">{pct}%</span>
      </div>
    </div>
  )
}

export default GoalCard