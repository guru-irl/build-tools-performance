import React from 'react';
const LABEL_17337 = 'component_17337';
export function Component17337({ value = 17337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17337, 'data-value': derived.doubled }, children);
}
export default Component17337;
