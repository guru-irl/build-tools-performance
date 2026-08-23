import React from 'react';
const LABEL_12484 = 'component_12484';
export function Component12484({ value = 12484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12484, 'data-value': derived.doubled }, children);
}
export default Component12484;
