import React from 'react';
const LABEL_32644 = 'component_32644';
export function Component32644({ value = 32644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32644, 'data-value': derived.doubled }, children);
}
export default Component32644;
