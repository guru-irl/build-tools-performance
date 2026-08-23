import React from 'react';
const LABEL_29558 = 'component_29558';
export function Component29558({ value = 29558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29558, 'data-value': derived.doubled }, children);
}
export default Component29558;
