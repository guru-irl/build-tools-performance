import React from 'react';
const LABEL_16805 = 'component_16805';
export function Component16805({ value = 16805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16805, 'data-value': derived.doubled }, children);
}
export default Component16805;
