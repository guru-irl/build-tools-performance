import React from 'react';
const LABEL_15160 = 'component_15160';
export function Component15160({ value = 15160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15160, 'data-value': derived.doubled }, children);
}
export default Component15160;
