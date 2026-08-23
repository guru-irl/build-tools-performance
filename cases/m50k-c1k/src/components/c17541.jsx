import React from 'react';
const LABEL_17541 = 'component_17541';
export function Component17541({ value = 17541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17541, 'data-value': derived.doubled }, children);
}
export default Component17541;
