import React from 'react';
const LABEL_31104 = 'component_31104';
export function Component31104({ value = 31104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31104, 'data-value': derived.doubled }, children);
}
export default Component31104;
