import React from 'react';
const LABEL_18623 = 'component_18623';
export function Component18623({ value = 18623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18623, 'data-value': derived.doubled }, children);
}
export default Component18623;
