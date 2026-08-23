import React from 'react';
const LABEL_15942 = 'component_15942';
export function Component15942({ value = 15942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15942, 'data-value': derived.doubled }, children);
}
export default Component15942;
