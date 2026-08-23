import React from 'react';
const LABEL_8430 = 'component_8430';
export function Component8430({ value = 8430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8430, 'data-value': derived.doubled }, children);
}
export default Component8430;
