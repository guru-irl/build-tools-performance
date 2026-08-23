import React from 'react';
const LABEL_29805 = 'component_29805';
export function Component29805({ value = 29805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29805, 'data-value': derived.doubled }, children);
}
export default Component29805;
