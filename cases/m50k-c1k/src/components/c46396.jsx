import React from 'react';
const LABEL_46396 = 'component_46396';
export function Component46396({ value = 46396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46396, 'data-value': derived.doubled }, children);
}
export default Component46396;
