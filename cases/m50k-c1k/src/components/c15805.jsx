import React from 'react';
const LABEL_15805 = 'component_15805';
export function Component15805({ value = 15805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15805, 'data-value': derived.doubled }, children);
}
export default Component15805;
