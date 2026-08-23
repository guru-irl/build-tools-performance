import React from 'react';
const LABEL_8805 = 'component_8805';
export function Component8805({ value = 8805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8805, 'data-value': derived.doubled }, children);
}
export default Component8805;
