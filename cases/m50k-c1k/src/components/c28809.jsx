import React from 'react';
const LABEL_28809 = 'component_28809';
export function Component28809({ value = 28809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28809, 'data-value': derived.doubled }, children);
}
export default Component28809;
