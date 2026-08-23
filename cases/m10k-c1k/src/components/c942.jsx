import React from 'react';
const LABEL_942 = 'component_942';
export function Component942({ value = 942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_942, 'data-value': derived.doubled }, children);
}
export default Component942;
