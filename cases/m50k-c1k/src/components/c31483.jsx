import React from 'react';
const LABEL_31483 = 'component_31483';
export function Component31483({ value = 31483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31483, 'data-value': derived.doubled }, children);
}
export default Component31483;
