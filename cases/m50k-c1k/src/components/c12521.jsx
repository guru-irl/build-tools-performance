import React from 'react';
const LABEL_12521 = 'component_12521';
export function Component12521({ value = 12521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12521, 'data-value': derived.doubled }, children);
}
export default Component12521;
