import React from 'react';
const LABEL_3104 = 'component_3104';
export function Component3104({ value = 3104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3104, 'data-value': derived.doubled }, children);
}
export default Component3104;
