import React from 'react';
const LABEL_13515 = 'component_13515';
export function Component13515({ value = 13515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13515, 'data-value': derived.doubled }, children);
}
export default Component13515;
