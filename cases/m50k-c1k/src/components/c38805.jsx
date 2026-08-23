import React from 'react';
const LABEL_38805 = 'component_38805';
export function Component38805({ value = 38805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38805, 'data-value': derived.doubled }, children);
}
export default Component38805;
