import React from 'react';
const LABEL_29548 = 'component_29548';
export function Component29548({ value = 29548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29548, 'data-value': derived.doubled }, children);
}
export default Component29548;
