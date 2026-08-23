import React from 'react';
const LABEL_5590 = 'component_5590';
export function Component5590({ value = 5590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5590, 'data-value': derived.doubled }, children);
}
export default Component5590;
