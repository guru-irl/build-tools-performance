import React from 'react';
const LABEL_12575 = 'component_12575';
export function Component12575({ value = 12575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12575, 'data-value': derived.doubled }, children);
}
export default Component12575;
