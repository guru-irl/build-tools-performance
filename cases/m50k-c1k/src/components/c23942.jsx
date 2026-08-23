import React from 'react';
const LABEL_23942 = 'component_23942';
export function Component23942({ value = 23942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23942, 'data-value': derived.doubled }, children);
}
export default Component23942;
