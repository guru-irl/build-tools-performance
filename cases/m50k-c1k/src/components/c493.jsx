import React from 'react';
const LABEL_493 = 'component_493';
export function Component493({ value = 493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_493, 'data-value': derived.doubled }, children);
}
export default Component493;
