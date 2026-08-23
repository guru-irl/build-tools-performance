import React from 'react';
const LABEL_11157 = 'component_11157';
export function Component11157({ value = 11157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11157, 'data-value': derived.doubled }, children);
}
export default Component11157;
