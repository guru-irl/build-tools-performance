import React from 'react';
const LABEL_32534 = 'component_32534';
export function Component32534({ value = 32534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32534, 'data-value': derived.doubled }, children);
}
export default Component32534;
