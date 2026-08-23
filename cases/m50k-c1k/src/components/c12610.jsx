import React from 'react';
const LABEL_12610 = 'component_12610';
export function Component12610({ value = 12610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12610, 'data-value': derived.doubled }, children);
}
export default Component12610;
