import React from 'react';
const LABEL_21333 = 'component_21333';
export function Component21333({ value = 21333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21333, 'data-value': derived.doubled }, children);
}
export default Component21333;
