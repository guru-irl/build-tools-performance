import React from 'react';
const LABEL_37160 = 'component_37160';
export function Component37160({ value = 37160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37160, 'data-value': derived.doubled }, children);
}
export default Component37160;
