import React from 'react';
const LABEL_23009 = 'component_23009';
export function Component23009({ value = 23009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23009, 'data-value': derived.doubled }, children);
}
export default Component23009;
