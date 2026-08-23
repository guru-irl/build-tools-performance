import React from 'react';
const LABEL_31343 = 'component_31343';
export function Component31343({ value = 31343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31343, 'data-value': derived.doubled }, children);
}
export default Component31343;
