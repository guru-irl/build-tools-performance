import React from 'react';
const LABEL_29644 = 'component_29644';
export function Component29644({ value = 29644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29644, 'data-value': derived.doubled }, children);
}
export default Component29644;
