import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './table.component.html',
styles:[`
  .table-container {
  text-align: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 350%;
  margin-bottom: 20px;
}

.font-weight {
  color: black;
  font-weight: bold;
}

.highlight-blue {
  color: #0066cc;
  font-weight: bold;
}

.features-table {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-collapse: collapse;
  font-size: 16px;
}

.features-table th,
.features-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.features-table th {
  background-color: #f9f9f9;
  font-weight: bold;
}

`]
})
export class TableComponent {}
