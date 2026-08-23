import React from 'react';
const LABEL_35157 = 'component_35157';
export function Component35157({ value = 35157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35157, 'data-value': derived.doubled }, children);
}
export default Component35157;
