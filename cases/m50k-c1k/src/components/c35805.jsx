import React from 'react';
const LABEL_35805 = 'component_35805';
export function Component35805({ value = 35805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35805, 'data-value': derived.doubled }, children);
}
export default Component35805;
