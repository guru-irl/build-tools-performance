import React from 'react';
const LABEL_15623 = 'component_15623';
export function Component15623({ value = 15623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15623, 'data-value': derived.doubled }, children);
}
export default Component15623;
