import React from 'react';
const LABEL_33494 = 'component_33494';
export function Component33494({ value = 33494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33494, 'data-value': derived.doubled }, children);
}
export default Component33494;
