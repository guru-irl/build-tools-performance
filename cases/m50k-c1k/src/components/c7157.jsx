import React from 'react';
const LABEL_7157 = 'component_7157';
export function Component7157({ value = 7157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7157, 'data-value': derived.doubled }, children);
}
export default Component7157;
