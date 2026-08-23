import React from 'react';
const LABEL_17341 = 'component_17341';
export function Component17341({ value = 17341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17341, 'data-value': derived.doubled }, children);
}
export default Component17341;
