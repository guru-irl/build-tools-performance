import React from 'react';
const LABEL_12805 = 'component_12805';
export function Component12805({ value = 12805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12805, 'data-value': derived.doubled }, children);
}
export default Component12805;
