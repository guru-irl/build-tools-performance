import React from 'react';
const LABEL_6157 = 'component_6157';
export function Component6157({ value = 6157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6157, 'data-value': derived.doubled }, children);
}
export default Component6157;
