import React from 'react';
const LABEL_9610 = 'component_9610';
export function Component9610({ value = 9610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9610, 'data-value': derived.doubled }, children);
}
export default Component9610;
