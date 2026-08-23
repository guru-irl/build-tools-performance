import React from 'react';
const LABEL_25255 = 'component_25255';
export function Component25255({ value = 25255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25255, 'data-value': derived.doubled }, children);
}
export default Component25255;
