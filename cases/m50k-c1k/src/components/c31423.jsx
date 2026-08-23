import React from 'react';
const LABEL_31423 = 'component_31423';
export function Component31423({ value = 31423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31423, 'data-value': derived.doubled }, children);
}
export default Component31423;
