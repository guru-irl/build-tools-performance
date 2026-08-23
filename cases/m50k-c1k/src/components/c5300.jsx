import React from 'react';
const LABEL_5300 = 'component_5300';
export function Component5300({ value = 5300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5300, 'data-value': derived.doubled }, children);
}
export default Component5300;
