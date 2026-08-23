import React from 'react';
const LABEL_3336 = 'component_3336';
export function Component3336({ value = 3336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3336, 'data-value': derived.doubled }, children);
}
export default Component3336;
