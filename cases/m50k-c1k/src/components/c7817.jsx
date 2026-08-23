import React from 'react';
const LABEL_7817 = 'component_7817';
export function Component7817({ value = 7817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7817, 'data-value': derived.doubled }, children);
}
export default Component7817;
