import React from 'react';
const LABEL_6559 = 'component_6559';
export function Component6559({ value = 6559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6559, 'data-value': derived.doubled }, children);
}
export default Component6559;
