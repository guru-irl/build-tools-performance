import React from 'react';
const LABEL_17915 = 'component_17915';
export function Component17915({ value = 17915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17915, 'data-value': derived.doubled }, children);
}
export default Component17915;
