// src/components/TableComponent.tsx
import React, { useState } from "react";
import { carData, Car } from "../data/data";

interface TableComponentProps {
  filterYear: number | null;
  filterTransmission: string | null;
}

const TableComponent: React.FC<TableComponentProps> = ({
  filterYear,
  filterTransmission,
}) => {
  const [collapsedMakes, setCollapsedMakes] = useState<string[]>([]);

  const toggleCollapse = (make: string) => {
    setCollapsedMakes((prev) =>
      prev.includes(make) ? prev.filter((m) => m !== make) : [...prev, make]
    );
  };

  const filteredData = carData.filter((car) => {
    const matchesYear = filterYear ? car.year === filterYear : true;
    const matchesTransmission = filterTransmission
      ? car.transmission === filterTransmission
      : true;
    return matchesYear && matchesTransmission;
  });

  const carTable = filteredData.reduce((acc: { [key: string]: Car[] }, car) => {
    acc[car.make] = acc[car.make] ? [...acc[car.make], car] : [car];
    return acc;
  }, {});

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Model</th>
          <th>Make</th>
          <th>Year</th>
          <th>Transmission Type</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(carTable).map((make) => (
          <React.Fragment key={make}>
            <tr>
              <td colSpan={4}>
                <button onClick={() => toggleCollapse(make)}>
                  {collapsedMakes.includes(make) ? "+" : "-"} {make}
                </button>
              </td>
            </tr>
            {!collapsedMakes.includes(make) &&
              carTable[make].map((car) => (
                <tr key={car.model}>
                  <td>{car.model}</td>
                  <td>{car.make}</td>
                  <td>{car.year}</td>
                  <td>{car.transmission}</td>
                </tr>
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
