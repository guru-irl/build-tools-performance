import React from 'react';
const LABEL_25623 = 'component_25623';
export function Component25623({ value = 25623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25623, 'data-value': derived.doubled }, children);
}
export default Component25623;
