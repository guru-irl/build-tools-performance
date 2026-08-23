import React from 'react';
const LABEL_21599 = 'component_21599';
export function Component21599({ value = 21599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21599, 'data-value': derived.doubled }, children);
}
export default Component21599;
