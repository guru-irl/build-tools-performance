import React from 'react';
const LABEL_32954 = 'component_32954';
export function Component32954({ value = 32954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32954, 'data-value': derived.doubled }, children);
}
export default Component32954;
