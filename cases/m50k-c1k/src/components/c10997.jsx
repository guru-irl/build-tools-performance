import React from 'react';
const LABEL_10997 = 'component_10997';
export function Component10997({ value = 10997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10997, 'data-value': derived.doubled }, children);
}
export default Component10997;
