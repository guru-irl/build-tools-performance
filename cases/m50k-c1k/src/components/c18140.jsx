import React from 'react';
const LABEL_18140 = 'component_18140';
export function Component18140({ value = 18140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18140, 'data-value': derived.doubled }, children);
}
export default Component18140;
