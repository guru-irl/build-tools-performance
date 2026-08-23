import React from 'react';
const LABEL_17117 = 'component_17117';
export function Component17117({ value = 17117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17117, 'data-value': derived.doubled }, children);
}
export default Component17117;
