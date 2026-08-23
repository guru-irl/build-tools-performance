import React from 'react';
const LABEL_6362 = 'component_6362';
export function Component6362({ value = 6362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6362, 'data-value': derived.doubled }, children);
}
export default Component6362;
