import React from 'react';
const LABEL_36882 = 'component_36882';
export function Component36882({ value = 36882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36882, 'data-value': derived.doubled }, children);
}
export default Component36882;
