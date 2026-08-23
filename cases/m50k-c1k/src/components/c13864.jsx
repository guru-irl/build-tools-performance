import React from 'react';
const LABEL_13864 = 'component_13864';
export function Component13864({ value = 13864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13864, 'data-value': derived.doubled }, children);
}
export default Component13864;
