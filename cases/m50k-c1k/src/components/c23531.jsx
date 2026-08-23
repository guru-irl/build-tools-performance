import React from 'react';
const LABEL_23531 = 'component_23531';
export function Component23531({ value = 23531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23531, 'data-value': derived.doubled }, children);
}
export default Component23531;
