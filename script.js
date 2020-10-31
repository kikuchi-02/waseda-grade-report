(() => {
  const boxes = this.document.querySelectorAll(".operationboxf");
  const lacks = [];
  let kubun = "";
  let isCongratulation = true;
  boxes.forEach((tr) => {
    const tds = [...tr.querySelectorAll("td")].map((val) => val.textContent);
    if (tds.length === 5) {
      kubun = tds[0] || kubun;
      kamoku = tds[1];
      const parse = (str) => {
        const parsed = parseInt(str, 10);
        if (isNaN(parsed) || !parsed) {
          return 0;
        }
        return parsed;
      };
      const lack = Math.max(parse(tds[2]) - parse(tds[3]), 0);
      if (lack > 0) {
        isCongratulation = false;
      }
      lacks.push(`${kubun} ${kamoku} needs more ${lack}`);
    }
  });

  const res = lacks.join("\n");
  return isCongratulation ? res + "\nCongratulations" : res;
})();
