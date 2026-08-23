import React from 'react';
const LABEL_21925 = 'component_21925';
export function Component21925({ value = 21925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21925, 'data-value': derived.doubled }, children);
}
export default Component21925;
