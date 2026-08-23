import React from 'react';
const LABEL_23931 = 'component_23931';
export function Component23931({ value = 23931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23931, 'data-value': derived.doubled }, children);
}
export default Component23931;
