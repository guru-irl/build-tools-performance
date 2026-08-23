import React from 'react';
const LABEL_24997 = 'component_24997';
export function Component24997({ value = 24997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24997, 'data-value': derived.doubled }, children);
}
export default Component24997;
