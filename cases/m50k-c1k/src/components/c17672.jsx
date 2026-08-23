import React from 'react';
const LABEL_17672 = 'component_17672';
export function Component17672({ value = 17672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17672, 'data-value': derived.doubled }, children);
}
export default Component17672;
