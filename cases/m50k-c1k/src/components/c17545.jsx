import React from 'react';
const LABEL_17545 = 'component_17545';
export function Component17545({ value = 17545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17545, 'data-value': derived.doubled }, children);
}
export default Component17545;
