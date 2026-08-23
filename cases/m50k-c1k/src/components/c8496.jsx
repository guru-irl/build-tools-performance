import React from 'react';
const LABEL_8496 = 'component_8496';
export function Component8496({ value = 8496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8496, 'data-value': derived.doubled }, children);
}
export default Component8496;
