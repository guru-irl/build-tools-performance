import React from 'react';
const LABEL_36638 = 'component_36638';
export function Component36638({ value = 36638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36638, 'data-value': derived.doubled }, children);
}
export default Component36638;
