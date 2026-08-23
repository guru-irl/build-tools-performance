import React from 'react';
const LABEL_44483 = 'component_44483';
export function Component44483({ value = 44483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44483, 'data-value': derived.doubled }, children);
}
export default Component44483;
