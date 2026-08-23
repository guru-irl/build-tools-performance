import React from 'react';
const LABEL_23754 = 'component_23754';
export function Component23754({ value = 23754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23754, 'data-value': derived.doubled }, children);
}
export default Component23754;
