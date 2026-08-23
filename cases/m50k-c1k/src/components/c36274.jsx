import React from 'react';
const LABEL_36274 = 'component_36274';
export function Component36274({ value = 36274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36274, 'data-value': derived.doubled }, children);
}
export default Component36274;
