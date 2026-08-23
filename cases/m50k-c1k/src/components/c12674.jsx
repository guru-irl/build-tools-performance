import React from 'react';
const LABEL_12674 = 'component_12674';
export function Component12674({ value = 12674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12674, 'data-value': derived.doubled }, children);
}
export default Component12674;
