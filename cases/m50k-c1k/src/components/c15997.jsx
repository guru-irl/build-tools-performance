import React from 'react';
const LABEL_15997 = 'component_15997';
export function Component15997({ value = 15997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15997, 'data-value': derived.doubled }, children);
}
export default Component15997;
