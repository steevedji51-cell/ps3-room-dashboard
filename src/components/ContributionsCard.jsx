import React from 'react'
import './ContributionsCard.css'

const ContributionsCard = ({ data, onToggleCotisation }) => {
  const MEMBERS = ['Steeve', 'Éphraïm', 'Pamela']
  const MONTHS = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8']

  return (
    <div className="card contributions-card">
      <div className="card-title">Suivi des Cotisations (10 000 F/mois)</div>
      <div className="members-container">
        {MEMBERS.map(member => (
          <div key={member} className="member-row">
            <div className="member-name">{member}</div>
            <div className="months-grid">
              {MONTHS.map((monthLabel, idx) => {
                const isPaid = data.cotisations[member][idx] === 1
                return (
                  <button
                    key={idx}
                    className={`month-btn ${isPaid ? 'paid' : ''}`}
                    onClick={() => onToggleCotisation(member, idx)}
                  >
                    {monthLabel}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContributionsCard