import React from 'react';
const LABEL_16300 = 'component_16300';
export function Component16300({ value = 16300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16300, 'data-value': derived.doubled }, children);
}
export default Component16300;
