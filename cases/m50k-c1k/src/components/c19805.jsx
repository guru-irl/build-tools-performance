import React from 'react';
const LABEL_19805 = 'component_19805';
export function Component19805({ value = 19805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19805, 'data-value': derived.doubled }, children);
}
export default Component19805;
