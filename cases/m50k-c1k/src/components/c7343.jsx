import React from 'react';
const LABEL_7343 = 'component_7343';
export function Component7343({ value = 7343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7343, 'data-value': derived.doubled }, children);
}
export default Component7343;
