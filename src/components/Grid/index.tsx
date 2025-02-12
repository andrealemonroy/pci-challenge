import React, { useEffect, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GridReadyEvent } from 'ag-grid-community';
import data from '../../near-earth-asteroids.json';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { columnDefs } from '../../constants';

const defaultColDef = {
  flex: 1,
  minWidth: 100,
  filter: true,
  sortable: true,
};

interface NeoGridProps {
  onClearRef?: (clearFn: () => void) => void;
  onCopyRef?: (copyFn: () => void) => void;
}

export const NeoGrid: React.FC<NeoGridProps> = ({ onClearRef, onCopyRef }) => {
  const gridRef = useRef<AgGridReact>(null);

  const handleClear = useCallback(() => {
    if (gridRef.current?.api) {
      gridRef.current.api.setFilterModel(null);
      gridRef.current.api.resetColumnState();
    }
  }, []);

  const handleCopy = useCallback(() => {
    if (gridRef.current?.api) {
      const selectedRows = gridRef.current.api.getSelectedRows();
      const copyText = selectedRows
        .map((row) => Object.values(row).join('\t'))
        .join('\n');

      navigator.clipboard.writeText(copyText).catch((err) => {
        console.error('Failed to copy text:', err);
      });
    }
  }, []);

  useEffect(() => {
    if (onCopyRef) {
      onCopyRef(handleCopy);
    }
  }, [handleCopy, onCopyRef]);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    if (onClearRef) {
      onClearRef(handleClear);
    }
  }, [handleClear, onClearRef]);

  return (
    <div className="ag-theme-alpine" style={{ height: '540px', width: '93%' }}>
      <AgGridReact
        ref={gridRef}
        rowData={data}
        columnDefs={columnDefs}
        gridOptions={{
          rowSelection: { mode: 'multiRow' },
        }}
        defaultColDef={defaultColDef}
        scrollbarWidth={20}
        onGridReady={onGridReady}
      />
    </div>
  );
};