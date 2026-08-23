import React from 'react';
const LABEL_37374 = 'component_37374';
export function Component37374({ value = 37374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37374, 'data-value': derived.doubled }, children);
}
export default Component37374;
