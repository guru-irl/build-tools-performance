import React from 'react';
const LABEL_1436 = 'component_1436';
export function Component1436({ value = 1436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1436, 'data-value': derived.doubled }, children);
}
export default Component1436;
