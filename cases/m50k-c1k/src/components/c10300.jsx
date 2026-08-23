import React from 'react';
const LABEL_10300 = 'component_10300';
export function Component10300({ value = 10300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10300, 'data-value': derived.doubled }, children);
}
export default Component10300;
