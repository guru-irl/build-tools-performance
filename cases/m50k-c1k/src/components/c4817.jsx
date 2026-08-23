import React from 'react';
const LABEL_4817 = 'component_4817';
export function Component4817({ value = 4817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4817, 'data-value': derived.doubled }, children);
}
export default Component4817;
