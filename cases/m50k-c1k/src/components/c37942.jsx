import React from 'react';
const LABEL_37942 = 'component_37942';
export function Component37942({ value = 37942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37942, 'data-value': derived.doubled }, children);
}
export default Component37942;
