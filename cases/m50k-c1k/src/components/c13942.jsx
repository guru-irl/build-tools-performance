import React from 'react';
const LABEL_13942 = 'component_13942';
export function Component13942({ value = 13942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13942, 'data-value': derived.doubled }, children);
}
export default Component13942;
