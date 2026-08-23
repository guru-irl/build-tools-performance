import React from 'react';
const LABEL_6761 = 'component_6761';
export function Component6761({ value = 6761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6761, 'data-value': derived.doubled }, children);
}
export default Component6761;
