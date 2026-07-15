import Dexie from 'dexie'

export const db = new Dexie('fh6ScorecardDB')

db.version(1).stores({
    games: '++id, createdAt, name'
})