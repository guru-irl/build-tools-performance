import React from 'react';
const LABEL_11942 = 'component_11942';
export function Component11942({ value = 11942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11942, 'data-value': derived.doubled }, children);
}
export default Component11942;
