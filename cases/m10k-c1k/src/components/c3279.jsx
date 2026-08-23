import React from 'react';
const LABEL_3279 = 'component_3279';
export function Component3279({ value = 3279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3279, 'data-value': derived.doubled }, children);
}
export default Component3279;
