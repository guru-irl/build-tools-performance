import React from 'react';
const LABEL_22590 = 'component_22590';
export function Component22590({ value = 22590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22590, 'data-value': derived.doubled }, children);
}
export default Component22590;
