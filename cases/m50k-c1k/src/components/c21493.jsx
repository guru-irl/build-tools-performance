import React from 'react';
const LABEL_21493 = 'component_21493';
export function Component21493({ value = 21493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21493, 'data-value': derived.doubled }, children);
}
export default Component21493;
