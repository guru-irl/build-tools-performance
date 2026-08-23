import React from 'react';
const LABEL_21929 = 'component_21929';
export function Component21929({ value = 21929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21929, 'data-value': derived.doubled }, children);
}
export default Component21929;
