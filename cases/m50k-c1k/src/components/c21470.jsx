import React from 'react';
const LABEL_21470 = 'component_21470';
export function Component21470({ value = 21470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21470, 'data-value': derived.doubled }, children);
}
export default Component21470;
