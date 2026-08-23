import React from 'react';
const LABEL_43395 = 'component_43395';
export function Component43395({ value = 43395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43395, 'data-value': derived.doubled }, children);
}
export default Component43395;
