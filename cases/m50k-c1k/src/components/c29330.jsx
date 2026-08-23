import React from 'react';
const LABEL_29330 = 'component_29330';
export function Component29330({ value = 29330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29330, 'data-value': derived.doubled }, children);
}
export default Component29330;
