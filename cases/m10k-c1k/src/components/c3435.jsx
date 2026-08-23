import React from 'react';
const LABEL_3435 = 'component_3435';
export function Component3435({ value = 3435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3435, 'data-value': derived.doubled }, children);
}
export default Component3435;
