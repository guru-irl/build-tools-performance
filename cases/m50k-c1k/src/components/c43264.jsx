import React from 'react';
const LABEL_43264 = 'component_43264';
export function Component43264({ value = 43264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43264, 'data-value': derived.doubled }, children);
}
export default Component43264;
