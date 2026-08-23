import React from 'react';
const LABEL_29777 = 'component_29777';
export function Component29777({ value = 29777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29777, 'data-value': derived.doubled }, children);
}
export default Component29777;
