import React from 'react';
const LABEL_35528 = 'component_35528';
export function Component35528({ value = 35528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35528, 'data-value': derived.doubled }, children);
}
export default Component35528;
