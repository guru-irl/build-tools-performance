import React from 'react';
const LABEL_17639 = 'component_17639';
export function Component17639({ value = 17639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17639, 'data-value': derived.doubled }, children);
}
export default Component17639;
