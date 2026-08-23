import React from 'react';
const LABEL_21805 = 'component_21805';
export function Component21805({ value = 21805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21805, 'data-value': derived.doubled }, children);
}
export default Component21805;
