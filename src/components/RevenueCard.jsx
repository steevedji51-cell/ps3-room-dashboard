import React, { useState } from 'react'
import './RevenueCard.css'

const RevenueCard = ({ data, onAddRevenue }) => {
  const [amount, setAmount] = useState('')
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const val = parseInt(amount)
    const userName = user.trim()

    if (!val || val <= 0 || !userName) {
      alert('Veuillez remplir le montant et votre nom.')
      return
    }

    onAddRevenue(val, userName)
    setAmount('')
    setUser('')
  }

  const totalRev = data.revenues.reduce((sum, r) => sum + r.amount, 0)

  return (
    <div className="card revenue-card">
      <div className="card-title">Encaissements du Jour (Phase 2)</div>

      <form onSubmit={handleSubmit} className="revenue-form">
        <div className="form-group">
          <label>Recette Brute (F CFA)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ex: 8500"
          />
        </div>
        <div className="form-group">
          <label>Nom de la personne de garde</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Ex: Steeve"
          />
        </div>
        <button type="submit" className="btn-add">Enregistrer la Journée</button>
      </form>

      <div className="revenue-summary">
        <div className="card-title">Remboursement Matériel</div>
        <div className="total-revenue">
          Total des recettes accumulées : <strong>{totalRev.toLocaleString()} F CFA</strong>
        </div>
      </div>

      <div className="card-title">Historique Récent</div>
      <div className="history-list">
        {data.revenues.length === 0 ? (
          <div className="empty-state">Aucune recette enregistrée</div>
        ) : (
          data.revenues.map((r, idx) => (
            <div key={idx} className="history-item">
              <span>{r.date} — <strong>{r.user}</strong></span>
              <span className="amount">+{r.amount.toLocaleString()} F</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default RevenueCard