import React from 'react';
const LABEL_17530 = 'component_17530';
export function Component17530({ value = 17530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17530, 'data-value': derived.doubled }, children);
}
export default Component17530;
