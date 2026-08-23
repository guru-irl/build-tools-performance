import React from 'react';
const LABEL_21336 = 'component_21336';
export function Component21336({ value = 21336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21336, 'data-value': derived.doubled }, children);
}
export default Component21336;
