import React from 'react';
const LABEL_18661 = 'component_18661';
export function Component18661({ value = 18661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18661, 'data-value': derived.doubled }, children);
}
export default Component18661;
