import React from 'react';
const LABEL_11435 = 'component_11435';
export function Component11435({ value = 11435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11435, 'data-value': derived.doubled }, children);
}
export default Component11435;
