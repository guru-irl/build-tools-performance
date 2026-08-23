import React from 'react';
const LABEL_1396 = 'component_1396';
export function Component1396({ value = 1396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1396, 'data-value': derived.doubled }, children);
}
export default Component1396;
