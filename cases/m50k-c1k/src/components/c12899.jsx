import React from 'react';
const LABEL_12899 = 'component_12899';
export function Component12899({ value = 12899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12899, 'data-value': derived.doubled }, children);
}
export default Component12899;
