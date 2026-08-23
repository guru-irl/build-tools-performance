import React from 'react';
const LABEL_16435 = 'component_16435';
export function Component16435({ value = 16435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16435, 'data-value': derived.doubled }, children);
}
export default Component16435;
