import React from 'react';
const LABEL_29198 = 'component_29198';
export function Component29198({ value = 29198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29198, 'data-value': derived.doubled }, children);
}
export default Component29198;
