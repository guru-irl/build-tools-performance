import React from 'react';
const LABEL_35942 = 'component_35942';
export function Component35942({ value = 35942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35942, 'data-value': derived.doubled }, children);
}
export default Component35942;
