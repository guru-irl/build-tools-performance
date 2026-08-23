import React from 'react';
const LABEL_42805 = 'component_42805';
export function Component42805({ value = 42805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42805, 'data-value': derived.doubled }, children);
}
export default Component42805;
