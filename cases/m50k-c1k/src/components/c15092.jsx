import React from 'react';
const LABEL_15092 = 'component_15092';
export function Component15092({ value = 15092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15092, 'data-value': derived.doubled }, children);
}
export default Component15092;
