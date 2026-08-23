import React from 'react';
const LABEL_18459 = 'component_18459';
export function Component18459({ value = 18459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18459, 'data-value': derived.doubled }, children);
}
export default Component18459;
