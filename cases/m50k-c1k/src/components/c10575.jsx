import React from 'react';
const LABEL_10575 = 'component_10575';
export function Component10575({ value = 10575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10575, 'data-value': derived.doubled }, children);
}
export default Component10575;
