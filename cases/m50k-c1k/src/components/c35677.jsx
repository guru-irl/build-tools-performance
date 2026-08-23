import React from 'react';
const LABEL_35677 = 'component_35677';
export function Component35677({ value = 35677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35677, 'data-value': derived.doubled }, children);
}
export default Component35677;
