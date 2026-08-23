import React from 'react';
const LABEL_13999 = 'component_13999';
export function Component13999({ value = 13999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13999, 'data-value': derived.doubled }, children);
}
export default Component13999;
