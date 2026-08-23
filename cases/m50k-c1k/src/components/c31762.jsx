import React from 'react';
const LABEL_31762 = 'component_31762';
export function Component31762({ value = 31762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31762, 'data-value': derived.doubled }, children);
}
export default Component31762;
