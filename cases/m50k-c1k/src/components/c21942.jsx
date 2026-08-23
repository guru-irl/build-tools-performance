import React from 'react';
const LABEL_21942 = 'component_21942';
export function Component21942({ value = 21942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21942, 'data-value': derived.doubled }, children);
}
export default Component21942;
