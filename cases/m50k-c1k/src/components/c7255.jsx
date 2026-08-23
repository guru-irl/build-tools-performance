import React from 'react';
const LABEL_7255 = 'component_7255';
export function Component7255({ value = 7255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7255, 'data-value': derived.doubled }, children);
}
export default Component7255;
