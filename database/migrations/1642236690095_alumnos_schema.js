'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnosSchema extends Schema {
  up () {
    this.create('alumnos', (table) => {
      table.increments()
      table.string('nombre', 50).unique()
      table.string('apellido_paterno', 50).unique()
      table.string('apellido_materno', 50).unique()
      table.integer('matricula')
      table.timestamps()
    })
  }

  down () {
    this.drop('alumnos')
  }
}

module.exports = AlumnosSchema
