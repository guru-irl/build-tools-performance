import React from 'react';
const LABEL_31160 = 'component_31160';
export function Component31160({ value = 31160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31160, 'data-value': derived.doubled }, children);
}
export default Component31160;
