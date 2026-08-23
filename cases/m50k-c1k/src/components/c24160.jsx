import React from 'react';
const LABEL_24160 = 'component_24160';
export function Component24160({ value = 24160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24160, 'data-value': derived.doubled }, children);
}
export default Component24160;
