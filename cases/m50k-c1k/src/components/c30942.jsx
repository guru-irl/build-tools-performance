import React from 'react';
const LABEL_30942 = 'component_30942';
export function Component30942({ value = 30942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30942, 'data-value': derived.doubled }, children);
}
export default Component30942;
