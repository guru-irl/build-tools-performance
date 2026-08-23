import React from 'react';
const LABEL_31858 = 'component_31858';
export function Component31858({ value = 31858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31858, 'data-value': derived.doubled }, children);
}
export default Component31858;
