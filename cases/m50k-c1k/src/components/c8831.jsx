import React from 'react';
const LABEL_8831 = 'component_8831';
export function Component8831({ value = 8831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8831, 'data-value': derived.doubled }, children);
}
export default Component8831;
