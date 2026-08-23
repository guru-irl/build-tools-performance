import React from 'react';
const LABEL_11374 = 'component_11374';
export function Component11374({ value = 11374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11374, 'data-value': derived.doubled }, children);
}
export default Component11374;
