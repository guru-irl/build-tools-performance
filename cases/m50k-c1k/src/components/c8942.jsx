import React from 'react';
const LABEL_8942 = 'component_8942';
export function Component8942({ value = 8942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8942, 'data-value': derived.doubled }, children);
}
export default Component8942;
