import React from 'react';
const LABEL_41374 = 'component_41374';
export function Component41374({ value = 41374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41374, 'data-value': derived.doubled }, children);
}
export default Component41374;
