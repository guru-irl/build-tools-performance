import React from 'react';
const LABEL_997 = 'component_997';
export function Component997({ value = 997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_997, 'data-value': derived.doubled }, children);
}
export default Component997;
