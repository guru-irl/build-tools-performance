import React from 'react';
const LABEL_46436 = 'component_46436';
export function Component46436({ value = 46436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46436, 'data-value': derived.doubled }, children);
}
export default Component46436;
