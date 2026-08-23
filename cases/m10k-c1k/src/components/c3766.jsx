import React from 'react';
const LABEL_3766 = 'component_3766';
export function Component3766({ value = 3766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3766, 'data-value': derived.doubled }, children);
}
export default Component3766;
