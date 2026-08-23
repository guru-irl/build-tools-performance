import React from 'react';
const LABEL_22343 = 'component_22343';
export function Component22343({ value = 22343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22343, 'data-value': derived.doubled }, children);
}
export default Component22343;
