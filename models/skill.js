const skills = [
    {id: 676767, skill: 'javascript', learned: false},
    {id: 898989, skill: 'css', learned: false},
    {id: 232323, skill: 'html', learned: false},
    {id: 454545, skill: 'mvc', learned: false}
];

  module.exports = {
    getAll,
    getSkill,
    create,
    deleteOne,
    update
  };
  
  function update(id, updatedSkill) {
    const skill = skills.find(s => s.id === parseInt(id));
    // Object.assign(targetObj, mergeObj1, mergeObj2, etc.)
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(skillId) {
    // Find the index of the todo object
    // based upon its id
    const idx = skills.findIndex(skill => skill.id === parseInt(skillId));
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 10000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getSkill(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }
  
  function getAll() {
    return skills;
  }