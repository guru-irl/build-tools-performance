import React from 'react';
const LABEL_24269 = 'component_24269';
export function Component24269({ value = 24269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24269, 'data-value': derived.doubled }, children);
}
export default Component24269;
