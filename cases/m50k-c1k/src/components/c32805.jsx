import React from 'react';
const LABEL_32805 = 'component_32805';
export function Component32805({ value = 32805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32805, 'data-value': derived.doubled }, children);
}
export default Component32805;
