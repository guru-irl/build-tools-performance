import React from 'react';
const LABEL_30300 = 'component_30300';
export function Component30300({ value = 30300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30300, 'data-value': derived.doubled }, children);
}
export default Component30300;
