import React from 'react';
const LABEL_21882 = 'component_21882';
export function Component21882({ value = 21882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21882, 'data-value': derived.doubled }, children);
}
export default Component21882;
