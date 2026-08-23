import React from 'react';
const LABEL_25942 = 'component_25942';
export function Component25942({ value = 25942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25942, 'data-value': derived.doubled }, children);
}
export default Component25942;
