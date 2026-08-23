import React from 'react';
const LABEL_25805 = 'component_25805';
export function Component25805({ value = 25805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25805, 'data-value': derived.doubled }, children);
}
export default Component25805;
