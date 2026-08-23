import React from 'react';
const LABEL_12263 = 'component_12263';
export function Component12263({ value = 12263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12263, 'data-value': derived.doubled }, children);
}
export default Component12263;
