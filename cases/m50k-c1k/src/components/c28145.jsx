import React from 'react';
const LABEL_28145 = 'component_28145';
export function Component28145({ value = 28145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28145, 'data-value': derived.doubled }, children);
}
export default Component28145;
