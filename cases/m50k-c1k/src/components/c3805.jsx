import React from 'react';
const LABEL_3805 = 'component_3805';
export function Component3805({ value = 3805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3805, 'data-value': derived.doubled }, children);
}
export default Component3805;
