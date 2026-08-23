import React from 'react';
const LABEL_8997 = 'component_8997';
export function Component8997({ value = 8997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8997, 'data-value': derived.doubled }, children);
}
export default Component8997;
