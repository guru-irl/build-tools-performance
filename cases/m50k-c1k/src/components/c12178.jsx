import React from 'react';
const LABEL_12178 = 'component_12178';
export function Component12178({ value = 12178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12178, 'data-value': derived.doubled }, children);
}
export default Component12178;
