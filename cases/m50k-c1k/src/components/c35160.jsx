import React from 'react';
const LABEL_35160 = 'component_35160';
export function Component35160({ value = 35160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35160, 'data-value': derived.doubled }, children);
}
export default Component35160;
