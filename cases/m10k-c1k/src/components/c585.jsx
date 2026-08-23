import React from 'react';
const LABEL_585 = 'component_585';
export function Component585({ value = 585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_585, 'data-value': derived.doubled }, children);
}
export default Component585;
