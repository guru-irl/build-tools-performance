import React from 'react';
const LABEL_26148 = 'component_26148';
export function Component26148({ value = 26148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26148, 'data-value': derived.doubled }, children);
}
export default Component26148;
