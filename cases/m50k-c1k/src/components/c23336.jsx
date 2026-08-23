import React from 'react';
const LABEL_23336 = 'component_23336';
export function Component23336({ value = 23336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23336, 'data-value': derived.doubled }, children);
}
export default Component23336;
