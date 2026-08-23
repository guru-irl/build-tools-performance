import React from 'react';
const LABEL_18997 = 'component_18997';
export function Component18997({ value = 18997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18997, 'data-value': derived.doubled }, children);
}
export default Component18997;
