function sumaKwadratow(tablica) {
  let suma = 0;

  suma =
    Math.pow(tablica[0], 2) +
    Math.pow(tablica[1], 2) +
    Math.pow(tablica[2], 2) +
    Math.pow(tablica[3], 2) +
    Math.pow(tablica[4], 2) +
    Math.pow(tablica[5], 2);
  return suma;
}

let liczby = [0, 1, 2, 3, 4, 5];

console.log(sumaKwadratow(liczby));
