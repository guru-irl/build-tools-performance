import React from 'react';
const LABEL_31808 = 'component_31808';
export function Component31808({ value = 31808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31808, 'data-value': derived.doubled }, children);
}
export default Component31808;
