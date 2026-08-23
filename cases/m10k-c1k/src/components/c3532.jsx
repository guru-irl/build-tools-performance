import React from 'react';
const LABEL_3532 = 'component_3532';
export function Component3532({ value = 3532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3532, 'data-value': derived.doubled }, children);
}
export default Component3532;
