import React from 'react';
const LABEL_17854 = 'component_17854';
export function Component17854({ value = 17854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17854, 'data-value': derived.doubled }, children);
}
export default Component17854;
