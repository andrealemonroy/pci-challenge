import { ColDef } from 'ag-grid-community';
import { formatDate, formatPHA } from '../utils';

export const columnDefs: ColDef[] = [
  {
    field: 'designation',
    headerName: 'Designation',
    filter: 'agTextColumnFilter',
    sortable: true,
  },
  {
    field: 'discovery_date',
    headerName: 'Discovery Date',
    filter: 'agDateColumnFilter',
    sortable: true,
    filterParams: {
      comparator: (filterDate: Date, cellValue: string) => {
        const cellDate = new Date(cellValue);
        if (cellDate < filterDate) return -1;
        if (cellDate > filterDate) return 1;
        return 0;
      },
    },
    valueFormatter: ({ value }) => formatDate(value),
  },
  {
    field: 'h_mag',
    headerName: 'H (mag)',
    filter: 'agNumberColumnFilter',
    sortable: true,
  },
  {
    field: 'moid_au',
    headerName: 'MOID (au)',
    filter: 'agNumberColumnFilter',
    sortable: true,
  },
  {
    field: 'q_au_1',
    headerName: 'q (au)',
    filter: 'agNumberColumnFilter',
    sortable: true,
  },
  {
    field: 'q_au_2',
    headerName: 'Q (au)',
    filter: 'agNumberColumnFilter',
    sortable: true,
  },
  {
    field: 'period_yr',
    headerName: 'Period (yr)',
    filter: 'agNumberColumnFilter',
    sortable: true,
  },
  {
    field: 'i_deg',
    headerName: 'Inclination (deg)',
    filter: 'agNumberColumnFilter',
    sortable: true,
  },
  {
    field: 'pha',
    headerName: 'Potentially Hazardous',
    filter: 'agTextColumnFilter',
    sortable: true,
    valueFormatter: ({ value }) => formatPHA(value),
  },
  {
    field: 'orbit_class',
    headerName: 'Orbit Class',
    filter: 'agTextColumnFilter',
    sortable: true,
    enableRowGroup: true,
  },
];