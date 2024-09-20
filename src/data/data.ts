export interface Car {
  model: string;
  make: string;
  year: number;
  transmission: string;
}

export const carData: Car[] = [
  { model: "Urus", make: "Lamborghini", year: 2017, transmission: "Automatic" },
  {
    model: "Cayenne Turbo",
    make: "Porsche",
    year: 2018,
    transmission: "Automatic",
  },
  {
    model: "Durango SRT",
    make: "Dodge",
    year: 2018,
    transmission: "Automatic",
  },
  {
    model: "Juke Nismo RS",
    make: "Nissan",
    year: 2014,
    transmission: "Manual",
  },
  {
    model: "Escalade ESV",
    make: "Cadillac",
    year: 2012,
    transmission: "Automatic",
  },
  {
    model: "Levante S",
    make: "Maserati",
    year: 2017,
    transmission: "Automatic",
  },
];
