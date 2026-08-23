import React from 'react';
const LABEL_31629 = 'component_31629';
export function Component31629({ value = 31629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31629, 'data-value': derived.doubled }, children);
}
export default Component31629;
