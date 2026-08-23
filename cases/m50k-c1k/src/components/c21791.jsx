import React from 'react';
const LABEL_21791 = 'component_21791';
export function Component21791({ value = 21791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21791, 'data-value': derived.doubled }, children);
}
export default Component21791;
