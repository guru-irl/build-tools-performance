import React from 'react';
const LABEL_15419 = 'component_15419';
export function Component15419({ value = 15419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15419, 'data-value': derived.doubled }, children);
}
export default Component15419;
