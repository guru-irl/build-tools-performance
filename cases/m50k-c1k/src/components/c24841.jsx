import React from 'react';
const LABEL_24841 = 'component_24841';
export function Component24841({ value = 24841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24841, 'data-value': derived.doubled }, children);
}
export default Component24841;
