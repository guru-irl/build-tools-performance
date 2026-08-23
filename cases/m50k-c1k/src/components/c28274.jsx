import React from 'react';
const LABEL_28274 = 'component_28274';
export function Component28274({ value = 28274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28274, 'data-value': derived.doubled }, children);
}
export default Component28274;
