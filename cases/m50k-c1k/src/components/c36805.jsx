import React from 'react';
const LABEL_36805 = 'component_36805';
export function Component36805({ value = 36805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36805, 'data-value': derived.doubled }, children);
}
export default Component36805;
