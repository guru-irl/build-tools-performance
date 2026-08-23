import React from 'react';
const LABEL_35491 = 'component_35491';
export function Component35491({ value = 35491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35491, 'data-value': derived.doubled }, children);
}
export default Component35491;
