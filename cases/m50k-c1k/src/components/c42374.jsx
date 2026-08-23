import React from 'react';
const LABEL_42374 = 'component_42374';
export function Component42374({ value = 42374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42374, 'data-value': derived.doubled }, children);
}
export default Component42374;
