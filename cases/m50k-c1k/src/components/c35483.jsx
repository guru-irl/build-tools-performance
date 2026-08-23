import React from 'react';
const LABEL_35483 = 'component_35483';
export function Component35483({ value = 35483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35483, 'data-value': derived.doubled }, children);
}
export default Component35483;
