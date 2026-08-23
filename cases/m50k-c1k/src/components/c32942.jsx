import React from 'react';
const LABEL_32942 = 'component_32942';
export function Component32942({ value = 32942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32942, 'data-value': derived.doubled }, children);
}
export default Component32942;
