import React from 'react';
const LABEL_37817 = 'component_37817';
export function Component37817({ value = 37817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37817, 'data-value': derived.doubled }, children);
}
export default Component37817;
