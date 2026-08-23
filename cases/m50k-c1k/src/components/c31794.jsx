import React from 'react';
const LABEL_31794 = 'component_31794';
export function Component31794({ value = 31794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31794, 'data-value': derived.doubled }, children);
}
export default Component31794;
