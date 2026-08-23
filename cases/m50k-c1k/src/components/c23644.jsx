import React from 'react';
const LABEL_23644 = 'component_23644';
export function Component23644({ value = 23644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23644, 'data-value': derived.doubled }, children);
}
export default Component23644;
