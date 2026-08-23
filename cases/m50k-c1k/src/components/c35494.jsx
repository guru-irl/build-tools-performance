import React from 'react';
const LABEL_35494 = 'component_35494';
export function Component35494({ value = 35494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35494, 'data-value': derived.doubled }, children);
}
export default Component35494;
