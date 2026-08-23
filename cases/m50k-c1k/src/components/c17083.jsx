import React from 'react';
const LABEL_17083 = 'component_17083';
export function Component17083({ value = 17083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17083, 'data-value': derived.doubled }, children);
}
export default Component17083;
