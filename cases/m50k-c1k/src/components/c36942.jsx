import React from 'react';
const LABEL_36942 = 'component_36942';
export function Component36942({ value = 36942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36942, 'data-value': derived.doubled }, children);
}
export default Component36942;
