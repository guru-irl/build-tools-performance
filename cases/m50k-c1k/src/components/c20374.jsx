import React from 'react';
const LABEL_20374 = 'component_20374';
export function Component20374({ value = 20374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20374, 'data-value': derived.doubled }, children);
}
export default Component20374;
