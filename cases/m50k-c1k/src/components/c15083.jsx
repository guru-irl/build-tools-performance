import React from 'react';
const LABEL_15083 = 'component_15083';
export function Component15083({ value = 15083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15083, 'data-value': derived.doubled }, children);
}
export default Component15083;
