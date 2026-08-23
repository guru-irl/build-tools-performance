import React from 'react';
const LABEL_35646 = 'component_35646';
export function Component35646({ value = 35646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35646, 'data-value': derived.doubled }, children);
}
export default Component35646;
