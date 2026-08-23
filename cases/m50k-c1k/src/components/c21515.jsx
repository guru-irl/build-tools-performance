import React from 'react';
const LABEL_21515 = 'component_21515';
export function Component21515({ value = 21515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21515, 'data-value': derived.doubled }, children);
}
export default Component21515;
