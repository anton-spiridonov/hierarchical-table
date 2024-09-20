import React, { useState } from "react";
import TableComponent from "./components/TableComponent";
import FilterComponent from "./components/FilterComponent";

const App: React.FC = () => {
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const [filterTransmission, setFilterTransmission] = useState<string | null>(
    null
  );

  const handleFilterChange = (
    year: number | null,
    transmission: string | null
  ) => {
    setFilterYear(year);
    setFilterTransmission(transmission);
  };

  return (
    <div>
      <h1>Car Model Table</h1>
      <FilterComponent onFilterChange={handleFilterChange} />
      <TableComponent
        filterYear={filterYear}
        filterTransmission={filterTransmission}
      />
    </div>
  );
};

export default App;
