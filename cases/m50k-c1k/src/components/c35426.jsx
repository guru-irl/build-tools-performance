import React from 'react';
const LABEL_35426 = 'component_35426';
export function Component35426({ value = 35426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35426, 'data-value': derived.doubled }, children);
}
export default Component35426;
