import React from 'react';
const LABEL_1134 = 'component_1134';
export function Component1134({ value = 1134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1134, 'data-value': derived.doubled }, children);
}
export default Component1134;
