import React from 'react';
const LABEL_3118 = 'component_3118';
export function Component3118({ value = 3118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3118, 'data-value': derived.doubled }, children);
}
export default Component3118;
