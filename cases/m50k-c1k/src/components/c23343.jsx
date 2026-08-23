import React from 'react';
const LABEL_23343 = 'component_23343';
export function Component23343({ value = 23343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23343, 'data-value': derived.doubled }, children);
}
export default Component23343;
