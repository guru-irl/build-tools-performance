import React from 'react';
const LABEL_31751 = 'component_31751';
export function Component31751({ value = 31751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31751, 'data-value': derived.doubled }, children);
}
export default Component31751;
