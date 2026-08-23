import React from 'react';
const LABEL_21525 = 'component_21525';
export function Component21525({ value = 21525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21525, 'data-value': derived.doubled }, children);
}
export default Component21525;
