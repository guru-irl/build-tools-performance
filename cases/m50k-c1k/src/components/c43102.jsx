import React from 'react';
const LABEL_43102 = 'component_43102';
export function Component43102({ value = 43102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43102, 'data-value': derived.doubled }, children);
}
export default Component43102;
