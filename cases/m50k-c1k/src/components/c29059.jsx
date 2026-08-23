import React from 'react';
const LABEL_29059 = 'component_29059';
export function Component29059({ value = 29059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29059, 'data-value': derived.doubled }, children);
}
export default Component29059;
