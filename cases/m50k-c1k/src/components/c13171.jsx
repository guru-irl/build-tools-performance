import React from 'react';
const LABEL_13171 = 'component_13171';
export function Component13171({ value = 13171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13171, 'data-value': derived.doubled }, children);
}
export default Component13171;
