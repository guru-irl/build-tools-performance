import React from 'react';
const LABEL_17234 = 'component_17234';
export function Component17234({ value = 17234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17234, 'data-value': derived.doubled }, children);
}
export default Component17234;
