import React from 'react';
const LABEL_26160 = 'component_26160';
export function Component26160({ value = 26160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26160, 'data-value': derived.doubled }, children);
}
export default Component26160;
