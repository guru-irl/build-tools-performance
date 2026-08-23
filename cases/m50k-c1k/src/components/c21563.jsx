import React from 'react';
const LABEL_21563 = 'component_21563';
export function Component21563({ value = 21563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21563, 'data-value': derived.doubled }, children);
}
export default Component21563;
