import React from 'react';
const LABEL_42157 = 'component_42157';
export function Component42157({ value = 42157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42157, 'data-value': derived.doubled }, children);
}
export default Component42157;
