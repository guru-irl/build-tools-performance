import React from 'react';
const LABEL_3125 = 'component_3125';
export function Component3125({ value = 3125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3125, 'data-value': derived.doubled }, children);
}
export default Component3125;
