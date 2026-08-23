import React from 'react';
const LABEL_30805 = 'component_30805';
export function Component30805({ value = 30805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30805, 'data-value': derived.doubled }, children);
}
export default Component30805;
