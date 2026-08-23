import React from 'react';
const LABEL_4374 = 'component_4374';
export function Component4374({ value = 4374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4374, 'data-value': derived.doubled }, children);
}
export default Component4374;
