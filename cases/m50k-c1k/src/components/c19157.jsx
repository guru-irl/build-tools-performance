import React from 'react';
const LABEL_19157 = 'component_19157';
export function Component19157({ value = 19157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19157, 'data-value': derived.doubled }, children);
}
export default Component19157;
