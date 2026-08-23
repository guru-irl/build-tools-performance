import React from 'react';
const LABEL_31718 = 'component_31718';
export function Component31718({ value = 31718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31718, 'data-value': derived.doubled }, children);
}
export default Component31718;
