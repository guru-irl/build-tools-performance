import React from 'react';
const LABEL_22157 = 'component_22157';
export function Component22157({ value = 22157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22157, 'data-value': derived.doubled }, children);
}
export default Component22157;
