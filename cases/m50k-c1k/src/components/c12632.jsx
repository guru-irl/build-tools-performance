import React from 'react';
const LABEL_12632 = 'component_12632';
export function Component12632({ value = 12632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12632, 'data-value': derived.doubled }, children);
}
export default Component12632;
