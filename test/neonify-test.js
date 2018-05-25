var tape = require("tape"),
    neonify = require("../");

tape("neonify() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(neonify.neonify(), 42);
  test.end();
});
