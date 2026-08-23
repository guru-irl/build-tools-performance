import React from 'react';
const LABEL_34942 = 'component_34942';
export function Component34942({ value = 34942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34942, 'data-value': derived.doubled }, children);
}
export default Component34942;
