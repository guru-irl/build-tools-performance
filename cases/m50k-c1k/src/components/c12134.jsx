import React from 'react';
const LABEL_12134 = 'component_12134';
export function Component12134({ value = 12134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12134, 'data-value': derived.doubled }, children);
}
export default Component12134;
