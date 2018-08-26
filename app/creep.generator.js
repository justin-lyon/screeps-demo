const createCreep = (name, role) => {
  Game.spawns['Pekkerwood'].spawnCreep([WORK, CARRY, MOVE], name, { memory: { role: role } });
}

const createBuilder = name => {
  createCreep(name, 'builder')
}

const createHarvester = name => {
  createCreep(name, 'harvester')
}

const createUpgrader = name => {
  createCreep(name, 'upgrader')
}

module.exports = {
  createBuilder,
  createHarvester,
  createUpgrader
}