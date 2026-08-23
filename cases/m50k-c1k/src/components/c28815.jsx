import React from 'react';
const LABEL_28815 = 'component_28815';
export function Component28815({ value = 28815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28815, 'data-value': derived.doubled }, children);
}
export default Component28815;
