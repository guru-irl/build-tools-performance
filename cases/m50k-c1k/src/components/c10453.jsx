import React from 'react';
const LABEL_10453 = 'component_10453';
export function Component10453({ value = 10453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10453, 'data-value': derived.doubled }, children);
}
export default Component10453;
