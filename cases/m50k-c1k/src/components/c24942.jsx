import React from 'react';
const LABEL_24942 = 'component_24942';
export function Component24942({ value = 24942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24942, 'data-value': derived.doubled }, children);
}
export default Component24942;
