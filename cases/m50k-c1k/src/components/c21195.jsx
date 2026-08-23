import React from 'react';
const LABEL_21195 = 'component_21195';
export function Component21195({ value = 21195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21195, 'data-value': derived.doubled }, children);
}
export default Component21195;
