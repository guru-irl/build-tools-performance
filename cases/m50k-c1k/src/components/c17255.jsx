import React from 'react';
const LABEL_17255 = 'component_17255';
export function Component17255({ value = 17255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17255, 'data-value': derived.doubled }, children);
}
export default Component17255;
