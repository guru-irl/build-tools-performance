import React from 'react';
const LABEL_13629 = 'component_13629';
export function Component13629({ value = 13629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13629, 'data-value': derived.doubled }, children);
}
export default Component13629;
