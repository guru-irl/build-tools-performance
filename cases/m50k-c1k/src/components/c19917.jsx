import React from 'react';
const LABEL_19917 = 'component_19917';
export function Component19917({ value = 19917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19917, 'data-value': derived.doubled }, children);
}
export default Component19917;
