import React from 'react';
const LABEL_13453 = 'component_13453';
export function Component13453({ value = 13453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13453, 'data-value': derived.doubled }, children);
}
export default Component13453;
