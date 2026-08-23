import React from 'react';
const LABEL_31933 = 'component_31933';
export function Component31933({ value = 31933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31933, 'data-value': derived.doubled }, children);
}
export default Component31933;
