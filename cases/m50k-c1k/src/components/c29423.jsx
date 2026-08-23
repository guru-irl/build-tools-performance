import React from 'react';
const LABEL_29423 = 'component_29423';
export function Component29423({ value = 29423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29423, 'data-value': derived.doubled }, children);
}
export default Component29423;
