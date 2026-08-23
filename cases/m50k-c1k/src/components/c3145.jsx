import React from 'react';
const LABEL_3145 = 'component_3145';
export function Component3145({ value = 3145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3145, 'data-value': derived.doubled }, children);
}
export default Component3145;
