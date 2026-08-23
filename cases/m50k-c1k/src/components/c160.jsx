import React from 'react';
const LABEL_160 = 'component_160';
export function Component160({ value = 160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_160, 'data-value': derived.doubled }, children);
}
export default Component160;
