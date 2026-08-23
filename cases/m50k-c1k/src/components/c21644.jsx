import React from 'react';
const LABEL_21644 = 'component_21644';
export function Component21644({ value = 21644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21644, 'data-value': derived.doubled }, children);
}
export default Component21644;
