import React from 'react';
const LABEL_11336 = 'component_11336';
export function Component11336({ value = 11336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11336, 'data-value': derived.doubled }, children);
}
export default Component11336;
