import React from 'react';
const LABEL_17116 = 'component_17116';
export function Component17116({ value = 17116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17116, 'data-value': derived.doubled }, children);
}
export default Component17116;
