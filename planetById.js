// The function is not returning the correct values. Can you figure out why?
// Example (Input --> Output ):

// function getPlanetName(id){
//   var name;
//   switch(id){
//     case 1:
//       name = 'Mercury'
//     case 2:
//       name = 'Venus'
//     case 3:
//       name = 'Earth'
//     case 4:
//       name = 'Mars'
//     case 5:
//       name = 'Jupiter'
//     case 6:
//       name = 'Saturn'
//     case 7:
//       name = 'Uranus'
//     case 8:
//       name = 'Neptune'
//   }

//   return name;
// }
// ---------------------------------------------------
// Add "break" statements
solution: function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
  }

  return name;
}
//  sample tests
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(getPlanetName(2), "Venus");
    Test.assertEquals(getPlanetName(5), "Jupiter");
    Test.assertEquals(getPlanetName(3), "Earth");
  });
});
