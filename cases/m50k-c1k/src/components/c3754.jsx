import React from 'react';
const LABEL_3754 = 'component_3754';
export function Component3754({ value = 3754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3754, 'data-value': derived.doubled }, children);
}
export default Component3754;
