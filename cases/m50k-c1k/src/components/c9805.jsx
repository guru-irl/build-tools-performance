import React from 'react';
const LABEL_9805 = 'component_9805';
export function Component9805({ value = 9805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9805, 'data-value': derived.doubled }, children);
}
export default Component9805;
