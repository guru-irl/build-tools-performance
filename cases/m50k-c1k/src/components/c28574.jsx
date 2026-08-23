import React from 'react';
const LABEL_28574 = 'component_28574';
export function Component28574({ value = 28574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28574, 'data-value': derived.doubled }, children);
}
export default Component28574;
