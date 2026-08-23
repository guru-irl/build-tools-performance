import React from 'react';
const LABEL_12976 = 'component_12976';
export function Component12976({ value = 12976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12976, 'data-value': derived.doubled }, children);
}
export default Component12976;
