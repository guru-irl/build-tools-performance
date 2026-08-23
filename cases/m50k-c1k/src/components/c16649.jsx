import React from 'react';
const LABEL_16649 = 'component_16649';
export function Component16649({ value = 16649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16649, 'data-value': derived.doubled }, children);
}
export default Component16649;
