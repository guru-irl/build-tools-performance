import React from 'react';
const LABEL_12100 = 'component_12100';
export function Component12100({ value = 12100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12100, 'data-value': derived.doubled }, children);
}
export default Component12100;
