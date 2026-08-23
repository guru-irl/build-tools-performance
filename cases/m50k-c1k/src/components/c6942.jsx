import React from 'react';
const LABEL_6942 = 'component_6942';
export function Component6942({ value = 6942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6942, 'data-value': derived.doubled }, children);
}
export default Component6942;
