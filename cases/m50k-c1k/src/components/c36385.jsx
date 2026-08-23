import React from 'react';
const LABEL_36385 = 'component_36385';
export function Component36385({ value = 36385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36385, 'data-value': derived.doubled }, children);
}
export default Component36385;
