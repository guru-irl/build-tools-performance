import React from 'react';
const LABEL_21362 = 'component_21362';
export function Component21362({ value = 21362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21362, 'data-value': derived.doubled }, children);
}
export default Component21362;
