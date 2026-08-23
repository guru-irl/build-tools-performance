import React from 'react';
const LABEL_25193 = 'component_25193';
export function Component25193({ value = 25193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25193, 'data-value': derived.doubled }, children);
}
export default Component25193;
