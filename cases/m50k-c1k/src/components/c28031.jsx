import React from 'react';
const LABEL_28031 = 'component_28031';
export function Component28031({ value = 28031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28031, 'data-value': derived.doubled }, children);
}
export default Component28031;
