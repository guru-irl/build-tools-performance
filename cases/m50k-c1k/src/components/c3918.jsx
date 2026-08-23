import React from 'react';
const LABEL_3918 = 'component_3918';
export function Component3918({ value = 3918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3918, 'data-value': derived.doubled }, children);
}
export default Component3918;
