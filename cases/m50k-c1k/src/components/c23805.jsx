import React from 'react';
const LABEL_23805 = 'component_23805';
export function Component23805({ value = 23805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23805, 'data-value': derived.doubled }, children);
}
export default Component23805;
