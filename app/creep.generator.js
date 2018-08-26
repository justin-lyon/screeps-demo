const Util = require('./utils')

const BUILDER = 'builder'
const HARVESTER = 'harvester'
const UPGRADER = 'upgrader'

const basicBody = [ WORK, WORK, CARRY, MOVE ]

const builderMemory = {
  role: BUILDER,
  pathColor: '#4286f4'
}

const harvestorMemory = {
  role: HARVESTER,
  pathColor: '#ffffff',
  sourceId: null
}

const upgraderMemory = {
  role: UPGRADER,
  pathColor: '#ffaa00'
}

const createCreep = (body, memory) => {
  const uuid = Util.getUuid()
  Game.spawns['Pekkerwood'].spawnCreep(
    body,
    uuid,
    { memory: memory });
}

const createBuilder = () => {
  createCreep(basicBody, builderMemory)
}

const createHarvester = () => {
  createCreep(basicBody, harvestorMemory)
}

const createUpgrader = () => {
  createCreep(basicBody, upgraderMemory)
}

module.exports = {
  createBuilder,
  createHarvester,
  createUpgrader
}