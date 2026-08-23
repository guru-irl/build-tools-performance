import React from 'react';
const LABEL_31374 = 'component_31374';
export function Component31374({ value = 31374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31374, 'data-value': derived.doubled }, children);
}
export default Component31374;
