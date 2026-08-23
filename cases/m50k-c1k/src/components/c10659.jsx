import React from 'react';
const LABEL_10659 = 'component_10659';
export function Component10659({ value = 10659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10659, 'data-value': derived.doubled }, children);
}
export default Component10659;
