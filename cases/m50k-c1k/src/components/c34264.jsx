import React from 'react';
const LABEL_34264 = 'component_34264';
export function Component34264({ value = 34264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34264, 'data-value': derived.doubled }, children);
}
export default Component34264;
