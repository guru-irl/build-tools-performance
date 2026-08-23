import React from 'react';
const LABEL_36630 = 'component_36630';
export function Component36630({ value = 36630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36630, 'data-value': derived.doubled }, children);
}
export default Component36630;
