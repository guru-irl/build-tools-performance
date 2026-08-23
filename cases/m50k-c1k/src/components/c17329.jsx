import React from 'react';
const LABEL_17329 = 'component_17329';
export function Component17329({ value = 17329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17329, 'data-value': derived.doubled }, children);
}
export default Component17329;
