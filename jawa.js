let exp = [];

function tamExp() {
  let nama = document.getElementById("exInput").value;
  let nominal = Number(document.getElementById("amInput").value);

  if (nama === "" || nominal <= 0) {
    document.getElementById("errorMsg").textContent = "gak boleh kosong";
    return;
  }

  document.getElementById("errorMsg").textContent = "";

  exp.push({ nama, nominal });
  document.getElementById("exInput").value = "";
  document.getElementById("amInput").value = "";
  render();
}

function delExp(index) {
  exp.splice(index, 1);
  render();
}

function render() {
  let hsl = "";
  let total = 0;

  for (let i = 0; i < exp.length; i++) {
    hsl += exp[i].nama + " - Rp." + exp[i].nominal.toLocaleString('id-ID');
    hsl += " <button onclick='delExp(" + i + ")'>Hapus</button><br>";
    total += exp[i].nominal;
  } 

  document.getElementById("expList").innerHTML = hsl;
  document.getElementById("totExp").textContent = total.toLocaleString('id-ID');
  document.getElementById("amExp").textContent = exp.length;
}