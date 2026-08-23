import React from 'react';
const LABEL_37496 = 'component_37496';
export function Component37496({ value = 37496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37496, 'data-value': derived.doubled }, children);
}
export default Component37496;
