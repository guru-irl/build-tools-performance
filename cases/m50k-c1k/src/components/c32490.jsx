import React from 'react';
const LABEL_32490 = 'component_32490';
export function Component32490({ value = 32490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32490, 'data-value': derived.doubled }, children);
}
export default Component32490;
