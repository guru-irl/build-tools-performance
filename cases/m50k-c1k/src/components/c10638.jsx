import React from 'react';
const LABEL_10638 = 'component_10638';
export function Component10638({ value = 10638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10638, 'data-value': derived.doubled }, children);
}
export default Component10638;
