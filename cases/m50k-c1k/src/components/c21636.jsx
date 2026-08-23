import React from 'react';
const LABEL_21636 = 'component_21636';
export function Component21636({ value = 21636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21636, 'data-value': derived.doubled }, children);
}
export default Component21636;
