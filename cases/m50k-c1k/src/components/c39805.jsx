import React from 'react';
const LABEL_39805 = 'component_39805';
export function Component39805({ value = 39805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39805, 'data-value': derived.doubled }, children);
}
export default Component39805;
