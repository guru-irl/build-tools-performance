import React from 'react';
const LABEL_22284 = 'component_22284';
export function Component22284({ value = 22284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22284, 'data-value': derived.doubled }, children);
}
export default Component22284;
