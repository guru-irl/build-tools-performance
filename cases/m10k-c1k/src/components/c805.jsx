import React from 'react';
const LABEL_805 = 'component_805';
export function Component805({ value = 805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_805, 'data-value': derived.doubled }, children);
}
export default Component805;
