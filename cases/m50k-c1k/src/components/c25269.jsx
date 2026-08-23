import React from 'react';
const LABEL_25269 = 'component_25269';
export function Component25269({ value = 25269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25269, 'data-value': derived.doubled }, children);
}
export default Component25269;
