import React from 'react';
const LABEL_21696 = 'component_21696';
export function Component21696({ value = 21696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21696, 'data-value': derived.doubled }, children);
}
export default Component21696;
