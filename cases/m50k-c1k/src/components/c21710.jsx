import React from 'react';
const LABEL_21710 = 'component_21710';
export function Component21710({ value = 21710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21710, 'data-value': derived.doubled }, children);
}
export default Component21710;
