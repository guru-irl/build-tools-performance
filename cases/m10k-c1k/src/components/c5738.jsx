import React from 'react';
const LABEL_5738 = 'component_5738';
export function Component5738({ value = 5738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5738, 'data-value': derived.doubled }, children);
}
export default Component5738;
