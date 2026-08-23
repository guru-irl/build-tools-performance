import React from 'react';
const LABEL_2118 = 'component_2118';
export function Component2118({ value = 2118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2118, 'data-value': derived.doubled }, children);
}
export default Component2118;
