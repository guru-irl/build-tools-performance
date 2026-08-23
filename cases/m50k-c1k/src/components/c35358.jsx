import React from 'react';
const LABEL_35358 = 'component_35358';
export function Component35358({ value = 35358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35358, 'data-value': derived.doubled }, children);
}
export default Component35358;
