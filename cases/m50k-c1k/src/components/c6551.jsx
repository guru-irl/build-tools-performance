import React from 'react';
const LABEL_6551 = 'component_6551';
export function Component6551({ value = 6551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6551, 'data-value': derived.doubled }, children);
}
export default Component6551;
