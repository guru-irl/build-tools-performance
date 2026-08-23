import React from 'react';
const LABEL_3157 = 'component_3157';
export function Component3157({ value = 3157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3157, 'data-value': derived.doubled }, children);
}
export default Component3157;
