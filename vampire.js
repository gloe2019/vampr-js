class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVampires = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numOfVampires++;
    }
    return numOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const thisone = (this.numberOfVampiresFromOriginal);

    const comparison = (vampire.numberOfVampiresFromOriginal);
    return thisone < comparison;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let self = this;
    const selfAncestor = [];
    while (self.creator) {
      selfAncestor.push(self);
      self = self.creator;
    }
    
    let other = vampire;
    const otherAncestor = [];
    while (other.creator) {
      otherAncestor.push(other);
      other = other.creator;
    }
    
    for (const selfanc of selfAncestor) {
      for (const otheranc of otherAncestor) {
        if (selfanc === otheranc) {
          console.log('match', selfanc.name);
          return selfanc;
        }
      }
    }
    return self;
  }
}

module.exports = Vampire;

