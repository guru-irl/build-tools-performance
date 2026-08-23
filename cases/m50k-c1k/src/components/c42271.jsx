import React from 'react';
const LABEL_42271 = 'component_42271';
export function Component42271({ value = 42271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42271, 'data-value': derived.doubled }, children);
}
export default Component42271;
