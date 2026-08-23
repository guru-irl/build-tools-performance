import React from 'react';
const LABEL_20269 = 'component_20269';
export function Component20269({ value = 20269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20269, 'data-value': derived.doubled }, children);
}
export default Component20269;
