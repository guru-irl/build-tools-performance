import React from 'react';
const LABEL_14374 = 'component_14374';
export function Component14374({ value = 14374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14374, 'data-value': derived.doubled }, children);
}
export default Component14374;
