import React from 'react';
const LABEL_17097 = 'component_17097';
export function Component17097({ value = 17097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17097, 'data-value': derived.doubled }, children);
}
export default Component17097;
