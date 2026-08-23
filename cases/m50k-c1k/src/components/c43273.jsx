import React from 'react';
const LABEL_43273 = 'component_43273';
export function Component43273({ value = 43273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43273, 'data-value': derived.doubled }, children);
}
export default Component43273;
