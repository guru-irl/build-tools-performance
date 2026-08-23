import React from 'react';
const LABEL_35251 = 'component_35251';
export function Component35251({ value = 35251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35251, 'data-value': derived.doubled }, children);
}
export default Component35251;
