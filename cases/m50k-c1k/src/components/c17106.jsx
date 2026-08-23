import React from 'react';
const LABEL_17106 = 'component_17106';
export function Component17106({ value = 17106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17106, 'data-value': derived.doubled }, children);
}
export default Component17106;
