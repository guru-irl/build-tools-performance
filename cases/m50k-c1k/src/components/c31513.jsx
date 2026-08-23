import React from 'react';
const LABEL_31513 = 'component_31513';
export function Component31513({ value = 31513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31513, 'data-value': derived.doubled }, children);
}
export default Component31513;
