import React from 'react';
const LABEL_17047 = 'component_17047';
export function Component17047({ value = 17047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17047, 'data-value': derived.doubled }, children);
}
export default Component17047;
