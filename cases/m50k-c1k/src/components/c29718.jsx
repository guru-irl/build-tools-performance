import React from 'react';
const LABEL_29718 = 'component_29718';
export function Component29718({ value = 29718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29718, 'data-value': derived.doubled }, children);
}
export default Component29718;
