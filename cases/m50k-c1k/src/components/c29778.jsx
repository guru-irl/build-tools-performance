import React from 'react';
const LABEL_29778 = 'component_29778';
export function Component29778({ value = 29778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29778, 'data-value': derived.doubled }, children);
}
export default Component29778;
