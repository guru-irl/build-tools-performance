import React from 'react';
const LABEL_15738 = 'component_15738';
export function Component15738({ value = 15738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15738, 'data-value': derived.doubled }, children);
}
export default Component15738;
