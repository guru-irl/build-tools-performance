import React from 'react';
const LABEL_12427 = 'component_12427';
export function Component12427({ value = 12427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12427, 'data-value': derived.doubled }, children);
}
export default Component12427;
