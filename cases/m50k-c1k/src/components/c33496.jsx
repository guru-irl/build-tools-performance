import React from 'react';
const LABEL_33496 = 'component_33496';
export function Component33496({ value = 33496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33496, 'data-value': derived.doubled }, children);
}
export default Component33496;
