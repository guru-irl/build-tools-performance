import React from 'react';
const LABEL_36767 = 'component_36767';
export function Component36767({ value = 36767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36767, 'data-value': derived.doubled }, children);
}
export default Component36767;
