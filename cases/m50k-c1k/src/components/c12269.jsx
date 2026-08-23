import React from 'react';
const LABEL_12269 = 'component_12269';
export function Component12269({ value = 12269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12269, 'data-value': derived.doubled }, children);
}
export default Component12269;
