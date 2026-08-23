import React from 'react';
const LABEL_26805 = 'component_26805';
export function Component26805({ value = 26805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26805, 'data-value': derived.doubled }, children);
}
export default Component26805;
