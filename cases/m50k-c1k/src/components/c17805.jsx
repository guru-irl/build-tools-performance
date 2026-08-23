import React from 'react';
const LABEL_17805 = 'component_17805';
export function Component17805({ value = 17805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17805, 'data-value': derived.doubled }, children);
}
export default Component17805;
