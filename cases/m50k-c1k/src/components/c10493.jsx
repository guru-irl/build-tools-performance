import React from 'react';
const LABEL_10493 = 'component_10493';
export function Component10493({ value = 10493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10493, 'data-value': derived.doubled }, children);
}
export default Component10493;
