import React from 'react';
const LABEL_22623 = 'component_22623';
export function Component22623({ value = 22623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22623, 'data-value': derived.doubled }, children);
}
export default Component22623;
