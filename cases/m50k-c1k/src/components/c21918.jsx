import React from 'react';
const LABEL_21918 = 'component_21918';
export function Component21918({ value = 21918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21918, 'data-value': derived.doubled }, children);
}
export default Component21918;
