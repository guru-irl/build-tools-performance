import React from 'react';
const LABEL_45787 = 'component_45787';
export function Component45787({ value = 45787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45787, 'data-value': derived.doubled }, children);
}
export default Component45787;
