function copyPatternToSubject() {
  const patternInput = document.getElementById("patternNumber");
  const subjectInput = document.getElementById("subjectNumber");

  if (subjectInput.value === "") {
      subjectInput.value = patternInput.value;
  }
}

function generateTable() {
  const patternN = parseInt(document.getElementById("patternNumber").value);
  const subjectN = parseInt(document.getElementById("subjectNumber").value);

  // 入力が不適切な場合、エラーメッセージを表示
  if (isNaN(patternN) || patternN <= 0 || isNaN(subjectN) || subjectN <= 0) {
      alert("正の整数を入力してください");
      return;
  }

  if (subjectN % patternN !== 0) {
      alert("被験者の人数はパターン数の整数でなければなりません");
      return;
  }

  let table = document.createElement("table");

  // 本体部分の行を追加
  for (let i = 0; i < subjectN; i++) {
    let row = table.insertRow(i);
    let subjectCell = row.insertCell(0);
    subjectCell.innerText = "被験者" + (i + 1);
    for (let j = 0; j < patternN; j++) {
        let cell = row.insertCell(j + 1);
        cell.innerText = (j - (i % patternN) + patternN) % patternN + 1;
    }
  }

  let container = document.getElementById("tableContainer");
  container.innerHTML = "";
  container.appendChild(table);
  }
