import React from 'react';
const LABEL_36031 = 'component_36031';
export function Component36031({ value = 36031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36031, 'data-value': derived.doubled }, children);
}
export default Component36031;
