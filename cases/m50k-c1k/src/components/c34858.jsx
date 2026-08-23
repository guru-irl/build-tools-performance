import React from 'react';
const LABEL_34858 = 'component_34858';
export function Component34858({ value = 34858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34858, 'data-value': derived.doubled }, children);
}
export default Component34858;
