// src/components/FilterComponent.tsx
import React, { useState } from "react";

interface FilterComponentProps {
  onFilterChange: (year: number | null, transmission: string | null) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilterChange,
}) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedTransmission, setSelectedTransmission] = useState<
    string | null
  >(null);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value === "All" ? null : parseInt(e.target.value, 10);
    setSelectedYear(year);
    onFilterChange(year, selectedTransmission);
  };

  const handleTransmissionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const transmission = e.target.value === "All" ? null : e.target.value;
    setSelectedTransmission(transmission);
    onFilterChange(selectedYear, transmission);
  };

  return (
    <div>
      <label>
        Filter by Year:
        <select onChange={handleYearChange}>
          <option value="All">All</option>
          <option value="2012">2012</option>
          <option value="2014">2014</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
        </select>
      </label>

      <label>
        Filter by Transmission:
        <select onChange={handleTransmissionChange}>
          <option value="All">All</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </label>
    </div>
  );
};

export default FilterComponent;
