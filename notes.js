const energy = Game.spawns[SPAWN_NAME]energy
console.log('energy', energy)

const ignoreSource = '15ea4b69eaffd56d47c98d61'
const availableSources = Game.spawns[SPAWN_NAME]room.find(FIND_SOURCES).filter(src => src.id !== ignoreSource)
console.log('sources', availableSources.map(src => src.id))
