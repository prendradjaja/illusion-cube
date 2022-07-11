function moreDemos(cubeId) {
  const n = cubeId;

  // // F R U R' U' F'
  // makeMove(n, 'F');
  // makeMove(n, 'R');
  // makeMove(n, 'U');
  // makeMove(n, 'R'); makeMove(n, 'R'); makeMove(n, 'R');
  // makeMove(n, 'U'); makeMove(n, 'U'); makeMove(n, 'U');
  // makeMove(n, 'F'); makeMove(n, 'F'); makeMove(n, 'F');

  // // Lefty sune (L' U' L U' L' U2 L)
  // makeMove(n, 'L'); makeMove(n, 'L'); makeMove(n, 'L');
  // makeMove(n, 'U'); makeMove(n, 'U'); makeMove(n, 'U');
  // makeMove(n, 'L');
  // makeMove(n, 'U'); makeMove(n, 'U'); makeMove(n, 'U');
  // makeMove(n, 'L'); makeMove(n, 'L'); makeMove(n, 'L');
  // makeMove(n, 'U'); makeMove(n, 'U');
  // makeMove(n, 'L');

  // // R D R' D'
  // makeMove(n, 'R');
  // makeMove(n, 'D');
  // makeMove(n, 'R'); makeMove(n, 'R'); makeMove(n, 'R');
  // makeMove(n, 'D'); makeMove(n, 'D'); makeMove(n, 'D');

  // // L B D B' D' L'
  // makeMove(n, 'L');
  // makeMove(n, 'B');
  // makeMove(n, 'D');
  // makeMove(n, 'B'); makeMove(n, 'B'); makeMove(n, 'B');
  // makeMove(n, 'D'); makeMove(n, 'D'); makeMove(n, 'D');
  // makeMove(n, 'L'); makeMove(n, 'L'); makeMove(n, 'L');

  // // MU U perm
  // // M2 U M U2 M' U M2
  // makeMove(n, 'M'); makeMove(n, 'M');
  // makeMove(n, 'U');
  // makeMove(n, 'M');
  // makeMove(n, 'U'); makeMove(n, 'U');
  // makeMove(n, 'M'); makeMove(n, 'M'); makeMove(n, 'M');
  // makeMove(n, 'U');
  // makeMove(n, 'M'); makeMove(n, 'M');

  // // E S E' S'
  // makeMove(n, 'E');
  // makeMove(n, 'S');
  // makeMove(n, 'E'); makeMove(n, 'E'); makeMove(n, 'E');
  // makeMove(n, 'S'); makeMove(n, 'S'); makeMove(n, 'S');

}

function moreDemosCube0() {
  moreDemos(0);
}

function moreDemosCube1() {
  moreDemos(1);
}
