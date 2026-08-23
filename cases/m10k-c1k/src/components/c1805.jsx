import React from 'react';
const LABEL_1805 = 'component_1805';
export function Component1805({ value = 1805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1805, 'data-value': derived.doubled }, children);
}
export default Component1805;
