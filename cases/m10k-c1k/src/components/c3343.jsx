import React from 'react';
const LABEL_3343 = 'component_3343';
export function Component3343({ value = 3343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3343, 'data-value': derived.doubled }, children);
}
export default Component3343;
