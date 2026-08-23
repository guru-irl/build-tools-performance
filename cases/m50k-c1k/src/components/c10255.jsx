import React from 'react';
const LABEL_10255 = 'component_10255';
export function Component10255({ value = 10255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10255, 'data-value': derived.doubled }, children);
}
export default Component10255;
