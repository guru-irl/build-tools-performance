import React from 'react';
const LABEL_29157 = 'component_29157';
export function Component29157({ value = 29157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29157, 'data-value': derived.doubled }, children);
}
export default Component29157;
