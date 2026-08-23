import React from 'react';
const LABEL_28787 = 'component_28787';
export function Component28787({ value = 28787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28787, 'data-value': derived.doubled }, children);
}
export default Component28787;
