import React from 'react';
const LABEL_21955 = 'component_21955';
export function Component21955({ value = 21955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21955, 'data-value': derived.doubled }, children);
}
export default Component21955;
