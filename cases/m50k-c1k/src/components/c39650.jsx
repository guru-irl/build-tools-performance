import React from 'react';
const LABEL_39650 = 'component_39650';
export function Component39650({ value = 39650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39650, 'data-value': derived.doubled }, children);
}
export default Component39650;
