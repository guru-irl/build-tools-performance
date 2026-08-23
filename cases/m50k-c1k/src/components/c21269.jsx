import React from 'react';
const LABEL_21269 = 'component_21269';
export function Component21269({ value = 21269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21269, 'data-value': derived.doubled }, children);
}
export default Component21269;
