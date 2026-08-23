import React from 'react';
const LABEL_15435 = 'component_15435';
export function Component15435({ value = 15435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15435, 'data-value': derived.doubled }, children);
}
export default Component15435;
