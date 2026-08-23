import React from 'react';
const LABEL_22031 = 'component_22031';
export function Component22031({ value = 22031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22031, 'data-value': derived.doubled }, children);
}
export default Component22031;
