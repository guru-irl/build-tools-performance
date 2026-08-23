import React from 'react';
const LABEL_26237 = 'component_26237';
export function Component26237({ value = 26237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26237, 'data-value': derived.doubled }, children);
}
export default Component26237;
