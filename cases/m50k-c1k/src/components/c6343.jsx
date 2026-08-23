import React from 'react';
const LABEL_6343 = 'component_6343';
export function Component6343({ value = 6343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6343, 'data-value': derived.doubled }, children);
}
export default Component6343;
