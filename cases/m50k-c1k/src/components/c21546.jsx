import React from 'react';
const LABEL_21546 = 'component_21546';
export function Component21546({ value = 21546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21546, 'data-value': derived.doubled }, children);
}
export default Component21546;
