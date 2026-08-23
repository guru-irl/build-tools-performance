import React from 'react';
const LABEL_35284 = 'component_35284';
export function Component35284({ value = 35284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35284, 'data-value': derived.doubled }, children);
}
export default Component35284;
