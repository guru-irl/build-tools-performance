import React from 'react';
const LABEL_29638 = 'component_29638';
export function Component29638({ value = 29638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29638, 'data-value': derived.doubled }, children);
}
export default Component29638;
