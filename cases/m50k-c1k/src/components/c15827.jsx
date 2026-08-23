import React from 'react';
const LABEL_15827 = 'component_15827';
export function Component15827({ value = 15827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15827, 'data-value': derived.doubled }, children);
}
export default Component15827;
