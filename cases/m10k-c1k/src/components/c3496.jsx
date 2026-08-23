import React from 'react';
const LABEL_3496 = 'component_3496';
export function Component3496({ value = 3496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3496, 'data-value': derived.doubled }, children);
}
export default Component3496;
