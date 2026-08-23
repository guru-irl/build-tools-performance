import React from 'react';
const LABEL_32269 = 'component_32269';
export function Component32269({ value = 32269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32269, 'data-value': derived.doubled }, children);
}
export default Component32269;
