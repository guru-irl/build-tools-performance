import React from 'react';
const LABEL_12478 = 'component_12478';
export function Component12478({ value = 12478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12478, 'data-value': derived.doubled }, children);
}
export default Component12478;
