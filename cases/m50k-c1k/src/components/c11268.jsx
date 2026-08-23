import React from 'react';
const LABEL_11268 = 'component_11268';
export function Component11268({ value = 11268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11268, 'data-value': derived.doubled }, children);
}
export default Component11268;
