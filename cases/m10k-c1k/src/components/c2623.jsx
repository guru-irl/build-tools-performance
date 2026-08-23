import React from 'react';
const LABEL_2623 = 'component_2623';
export function Component2623({ value = 2623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2623, 'data-value': derived.doubled }, children);
}
export default Component2623;
