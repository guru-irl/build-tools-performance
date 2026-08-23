import React from 'react';
const LABEL_35937 = 'component_35937';
export function Component35937({ value = 35937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35937, 'data-value': derived.doubled }, children);
}
export default Component35937;
