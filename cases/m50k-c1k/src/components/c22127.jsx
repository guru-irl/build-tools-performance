import React from 'react';
const LABEL_22127 = 'component_22127';
export function Component22127({ value = 22127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22127, 'data-value': derived.doubled }, children);
}
export default Component22127;
