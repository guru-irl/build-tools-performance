import React from 'react';
const LABEL_7882 = 'component_7882';
export function Component7882({ value = 7882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7882, 'data-value': derived.doubled }, children);
}
export default Component7882;
