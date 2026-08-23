import React from 'react';
const LABEL_14623 = 'component_14623';
export function Component14623({ value = 14623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14623, 'data-value': derived.doubled }, children);
}
export default Component14623;
