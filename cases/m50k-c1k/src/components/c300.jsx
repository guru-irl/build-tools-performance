import React from 'react';
const LABEL_300 = 'component_300';
export function Component300({ value = 300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_300, 'data-value': derived.doubled }, children);
}
export default Component300;
