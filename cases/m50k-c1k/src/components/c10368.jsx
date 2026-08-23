import React from 'react';
const LABEL_10368 = 'component_10368';
export function Component10368({ value = 10368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10368, 'data-value': derived.doubled }, children);
}
export default Component10368;
