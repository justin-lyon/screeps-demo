import * as creepGen from './creep.generator'
import roleHarvester from './role/role.harvester'
import roleUpgrader from './role/role.upgrader'
import roleBuilder from './role/role.builder'

const loop = () => {
  for (const name in Game.creeps) {
    const creep = Game.creeps[name]
    if (creep.memory.role === 'harvester') {
      roleHarvester(creep)
    }
    if (creep.memory.role === 'upgrader') {
      roleUpgrader(creep)
    }
    if (creep.memory.role === 'builder') {
      roleBuilder(creep)
    }
  }

  const energy = Game.spawns.Pekkerwood.energy
  console.log('energy', energy)
}

export default loop
