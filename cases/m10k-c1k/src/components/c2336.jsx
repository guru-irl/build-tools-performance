import React from 'react';
const LABEL_2336 = 'component_2336';
export function Component2336({ value = 2336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2336, 'data-value': derived.doubled }, children);
}
export default Component2336;
