import React from 'react';
const LABEL_11805 = 'component_11805';
export function Component11805({ value = 11805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11805, 'data-value': derived.doubled }, children);
}
export default Component11805;
