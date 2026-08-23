import React from 'react';
const LABEL_15638 = 'component_15638';
export function Component15638({ value = 15638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15638, 'data-value': derived.doubled }, children);
}
export default Component15638;
