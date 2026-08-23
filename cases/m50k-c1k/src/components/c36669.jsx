import React from 'react';
const LABEL_36669 = 'component_36669';
export function Component36669({ value = 36669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36669, 'data-value': derived.doubled }, children);
}
export default Component36669;
