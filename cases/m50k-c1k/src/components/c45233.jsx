import React from 'react';
const LABEL_45233 = 'component_45233';
export function Component45233({ value = 45233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45233, 'data-value': derived.doubled }, children);
}
export default Component45233;
