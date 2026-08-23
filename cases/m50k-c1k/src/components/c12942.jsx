import React from 'react';
const LABEL_12942 = 'component_12942';
export function Component12942({ value = 12942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12942, 'data-value': derived.doubled }, children);
}
export default Component12942;
