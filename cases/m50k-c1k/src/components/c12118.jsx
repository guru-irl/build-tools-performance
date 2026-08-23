import React from 'react';
const LABEL_12118 = 'component_12118';
export function Component12118({ value = 12118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12118, 'data-value': derived.doubled }, children);
}
export default Component12118;
