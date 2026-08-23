import React from 'react';
const LABEL_16942 = 'component_16942';
export function Component16942({ value = 16942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16942, 'data-value': derived.doubled }, children);
}
export default Component16942;
