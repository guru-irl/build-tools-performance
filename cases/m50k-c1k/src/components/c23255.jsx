import React from 'react';
const LABEL_23255 = 'component_23255';
export function Component23255({ value = 23255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23255, 'data-value': derived.doubled }, children);
}
export default Component23255;
