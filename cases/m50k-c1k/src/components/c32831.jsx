import React from 'react';
const LABEL_32831 = 'component_32831';
export function Component32831({ value = 32831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32831, 'data-value': derived.doubled }, children);
}
export default Component32831;
