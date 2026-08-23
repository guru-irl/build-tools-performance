import React from 'react';
const LABEL_23300 = 'component_23300';
export function Component23300({ value = 23300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23300, 'data-value': derived.doubled }, children);
}
export default Component23300;
