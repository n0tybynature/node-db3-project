const db = require('../../data/db-config')

function find() { // EXERCISE A
  return db('schemes')
}

function findById(scheme_id) { // EXERCISE B
  return db('schemes').where('scheme_id', scheme_id).first()  
}

function findSteps(scheme_id) { // EXERCISE C
  return db('schemes as s')
    .join('steps as st', 'st.scheme_id', 's.id')
    .where('s.id', scheme_id)
    .select('*')
}

function add(scheme) { // EXERCISE D
  return db('schemes').insert(scheme)
    .then(([id]) => {
      return db('schemes').where('id', id).first()
    })
}

function addStep(scheme_id, step) { // EXERCISE E
  const adding = step
  return db('schemes').where('step', step).update(scheme_id)
    .then(() => {
      return db('schemes').where('step', adding).first()
    })
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
}
