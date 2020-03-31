export const repository = {
  saveTodolists(todolists) {
    this._save(todolists, 'todolists')
  },

  getTodolists() {
    return this._get('todolists')
  },

  saveTasks(tasks, todolistsId) {
    this._save(tasks, 'out-state-' + todolistsId)
  },

  getTasks(id) {
    return this._get('out-state-' + id)
  },

  _save(data, key) {
    let stateAsString = JSON.stringify(data);
    localStorage.setItem(key, stateAsString)
  },
  _get(key) {
    let stateAsString = localStorage.getItem(key);
    if (stateAsString != null) {
      let state = JSON.parse(stateAsString);
      return state
    }
    return null
  },
};