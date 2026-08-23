import React from 'react';
const LABEL_43132 = 'component_43132';
export function Component43132({ value = 43132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43132, 'data-value': derived.doubled }, children);
}
export default Component43132;
