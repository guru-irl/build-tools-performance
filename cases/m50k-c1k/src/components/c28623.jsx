import React from 'react';
const LABEL_28623 = 'component_28623';
export function Component28623({ value = 28623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28623, 'data-value': derived.doubled }, children);
}
export default Component28623;
