import React from 'react';
const LABEL_17072 = 'component_17072';
export function Component17072({ value = 17072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17072, 'data-value': derived.doubled }, children);
}
export default Component17072;
