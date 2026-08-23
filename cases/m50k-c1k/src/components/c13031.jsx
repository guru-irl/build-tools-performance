import React from 'react';
const LABEL_13031 = 'component_13031';
export function Component13031({ value = 13031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13031, 'data-value': derived.doubled }, children);
}
export default Component13031;
