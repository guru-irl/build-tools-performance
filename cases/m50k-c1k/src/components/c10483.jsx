import React from 'react';
const LABEL_10483 = 'component_10483';
export function Component10483({ value = 10483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10483, 'data-value': derived.doubled }, children);
}
export default Component10483;
