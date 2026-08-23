import React from 'react';
const LABEL_44374 = 'component_44374';
export function Component44374({ value = 44374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44374, 'data-value': derived.doubled }, children);
}
export default Component44374;
