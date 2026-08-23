import React from 'react';
const LABEL_3942 = 'component_3942';
export function Component3942({ value = 3942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3942, 'data-value': derived.doubled }, children);
}
export default Component3942;
