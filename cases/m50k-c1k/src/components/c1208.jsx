import React from 'react';
const LABEL_1208 = 'component_1208';
export function Component1208({ value = 1208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1208, 'data-value': derived.doubled }, children);
}
export default Component1208;
