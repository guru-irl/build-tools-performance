import React from 'react';
const LABEL_39396 = 'component_39396';
export function Component39396({ value = 39396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39396, 'data-value': derived.doubled }, children);
}
export default Component39396;
