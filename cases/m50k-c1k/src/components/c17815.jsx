import React from 'react';
const LABEL_17815 = 'component_17815';
export function Component17815({ value = 17815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17815, 'data-value': derived.doubled }, children);
}
export default Component17815;
