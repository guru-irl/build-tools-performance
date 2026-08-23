import React from 'react';
const LABEL_11623 = 'component_11623';
export function Component11623({ value = 11623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11623, 'data-value': derived.doubled }, children);
}
export default Component11623;
