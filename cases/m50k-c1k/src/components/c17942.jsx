import React from 'react';
const LABEL_17942 = 'component_17942';
export function Component17942({ value = 17942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17942, 'data-value': derived.doubled }, children);
}
export default Component17942;
