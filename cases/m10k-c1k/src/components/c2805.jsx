import React from 'react';
const LABEL_2805 = 'component_2805';
export function Component2805({ value = 2805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2805, 'data-value': derived.doubled }, children);
}
export default Component2805;
