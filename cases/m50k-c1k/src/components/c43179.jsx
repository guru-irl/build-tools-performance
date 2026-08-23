import React from 'react';
const LABEL_43179 = 'component_43179';
export function Component43179({ value = 43179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43179, 'data-value': derived.doubled }, children);
}
export default Component43179;
