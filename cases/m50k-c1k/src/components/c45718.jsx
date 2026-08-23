import React from 'react';
const LABEL_45718 = 'component_45718';
export function Component45718({ value = 45718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45718, 'data-value': derived.doubled }, children);
}
export default Component45718;
