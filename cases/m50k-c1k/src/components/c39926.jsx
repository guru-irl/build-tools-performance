import React from 'react';
const LABEL_39926 = 'component_39926';
export function Component39926({ value = 39926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39926, 'data-value': derived.doubled }, children);
}
export default Component39926;
