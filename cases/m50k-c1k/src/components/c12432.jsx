import React from 'react';
const LABEL_12432 = 'component_12432';
export function Component12432({ value = 12432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12432, 'data-value': derived.doubled }, children);
}
export default Component12432;
