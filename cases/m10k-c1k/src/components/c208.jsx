import React from 'react';
const LABEL_208 = 'component_208';
export function Component208({ value = 208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_208, 'data-value': derived.doubled }, children);
}
export default Component208;
