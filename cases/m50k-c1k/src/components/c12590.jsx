import React from 'react';
const LABEL_12590 = 'component_12590';
export function Component12590({ value = 12590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12590, 'data-value': derived.doubled }, children);
}
export default Component12590;
