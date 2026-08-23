import React from 'react';
const LABEL_17334 = 'component_17334';
export function Component17334({ value = 17334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17334, 'data-value': derived.doubled }, children);
}
export default Component17334;
