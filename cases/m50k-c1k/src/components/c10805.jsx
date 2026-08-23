import React from 'react';
const LABEL_10805 = 'component_10805';
export function Component10805({ value = 10805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10805, 'data-value': derived.doubled }, children);
}
export default Component10805;
