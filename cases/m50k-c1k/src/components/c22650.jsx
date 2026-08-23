import React from 'react';
const LABEL_22650 = 'component_22650';
export function Component22650({ value = 22650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22650, 'data-value': derived.doubled }, children);
}
export default Component22650;
