import React from 'react';
const LABEL_26942 = 'component_26942';
export function Component26942({ value = 26942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26942, 'data-value': derived.doubled }, children);
}
export default Component26942;
