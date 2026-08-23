import React from 'react';
const LABEL_35188 = 'component_35188';
export function Component35188({ value = 35188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35188, 'data-value': derived.doubled }, children);
}
export default Component35188;
