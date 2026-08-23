import React from 'react';
const LABEL_26483 = 'component_26483';
export function Component26483({ value = 26483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26483, 'data-value': derived.doubled }, children);
}
export default Component26483;
