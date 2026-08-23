import React from 'react';
const LABEL_33255 = 'component_33255';
export function Component33255({ value = 33255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33255, 'data-value': derived.doubled }, children);
}
export default Component33255;
