import React from 'react';
const LABEL_31243 = 'component_31243';
export function Component31243({ value = 31243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31243, 'data-value': derived.doubled }, children);
}
export default Component31243;
