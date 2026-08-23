import React from 'react';
const LABEL_23926 = 'component_23926';
export function Component23926({ value = 23926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23926, 'data-value': derived.doubled }, children);
}
export default Component23926;
