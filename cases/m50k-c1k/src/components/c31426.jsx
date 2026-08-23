import React from 'react';
const LABEL_31426 = 'component_31426';
export function Component31426({ value = 31426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31426, 'data-value': derived.doubled }, children);
}
export default Component31426;
