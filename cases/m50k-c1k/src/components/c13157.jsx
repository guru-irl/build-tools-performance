import React from 'react';
const LABEL_13157 = 'component_13157';
export function Component13157({ value = 13157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13157, 'data-value': derived.doubled }, children);
}
export default Component13157;
