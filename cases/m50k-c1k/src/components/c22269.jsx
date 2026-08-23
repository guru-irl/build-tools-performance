import React from 'react';
const LABEL_22269 = 'component_22269';
export function Component22269({ value = 22269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22269, 'data-value': derived.doubled }, children);
}
export default Component22269;
