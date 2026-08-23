import React from 'react';
const LABEL_27805 = 'component_27805';
export function Component27805({ value = 27805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27805, 'data-value': derived.doubled }, children);
}
export default Component27805;
