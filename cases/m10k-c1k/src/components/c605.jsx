import React from 'react';
const LABEL_605 = 'component_605';
export function Component605({ value = 605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_605, 'data-value': derived.doubled }, children);
}
export default Component605;
