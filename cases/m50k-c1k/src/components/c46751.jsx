import React from 'react';
const LABEL_46751 = 'component_46751';
export function Component46751({ value = 46751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46751, 'data-value': derived.doubled }, children);
}
export default Component46751;
