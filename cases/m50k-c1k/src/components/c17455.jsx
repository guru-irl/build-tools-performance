import React from 'react';
const LABEL_17455 = 'component_17455';
export function Component17455({ value = 17455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17455, 'data-value': derived.doubled }, children);
}
export default Component17455;
