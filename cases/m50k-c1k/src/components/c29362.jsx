import React from 'react';
const LABEL_29362 = 'component_29362';
export function Component29362({ value = 29362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29362, 'data-value': derived.doubled }, children);
}
export default Component29362;
