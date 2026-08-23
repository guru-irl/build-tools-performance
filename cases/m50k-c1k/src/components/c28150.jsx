import React from 'react';
const LABEL_28150 = 'component_28150';
export function Component28150({ value = 28150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28150, 'data-value': derived.doubled }, children);
}
export default Component28150;
