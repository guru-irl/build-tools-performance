import React from 'react';
const LABEL_28372 = 'component_28372';
export function Component28372({ value = 28372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28372, 'data-value': derived.doubled }, children);
}
export default Component28372;
