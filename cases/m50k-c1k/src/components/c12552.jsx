import React from 'react';
const LABEL_12552 = 'component_12552';
export function Component12552({ value = 12552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12552, 'data-value': derived.doubled }, children);
}
export default Component12552;
