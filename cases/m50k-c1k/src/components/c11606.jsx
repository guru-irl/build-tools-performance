import React from 'react';
const LABEL_11606 = 'component_11606';
export function Component11606({ value = 11606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11606, 'data-value': derived.doubled }, children);
}
export default Component11606;
