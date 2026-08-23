import React from 'react';
const LABEL_43031 = 'component_43031';
export function Component43031({ value = 43031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43031, 'data-value': derived.doubled }, children);
}
export default Component43031;
