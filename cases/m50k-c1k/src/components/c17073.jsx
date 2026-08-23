import React from 'react';
const LABEL_17073 = 'component_17073';
export function Component17073({ value = 17073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17073, 'data-value': derived.doubled }, children);
}
export default Component17073;
