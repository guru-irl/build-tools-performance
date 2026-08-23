import React from 'react';
const LABEL_37208 = 'component_37208';
export function Component37208({ value = 37208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37208, 'data-value': derived.doubled }, children);
}
export default Component37208;
