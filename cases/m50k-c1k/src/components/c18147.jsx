import React from 'react';
const LABEL_18147 = 'component_18147';
export function Component18147({ value = 18147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18147, 'data-value': derived.doubled }, children);
}
export default Component18147;
