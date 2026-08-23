import React from 'react';
const LABEL_17771 = 'component_17771';
export function Component17771({ value = 17771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17771, 'data-value': derived.doubled }, children);
}
export default Component17771;
