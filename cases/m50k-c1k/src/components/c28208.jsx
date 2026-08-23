import React from 'react';
const LABEL_28208 = 'component_28208';
export function Component28208({ value = 28208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28208, 'data-value': derived.doubled }, children);
}
export default Component28208;
