import React from 'react';
const LABEL_44083 = 'component_44083';
export function Component44083({ value = 44083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44083, 'data-value': derived.doubled }, children);
}
export default Component44083;
