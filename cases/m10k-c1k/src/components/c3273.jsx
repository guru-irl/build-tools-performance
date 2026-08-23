import React from 'react';
const LABEL_3273 = 'component_3273';
export function Component3273({ value = 3273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3273, 'data-value': derived.doubled }, children);
}
export default Component3273;
