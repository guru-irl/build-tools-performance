import React from 'react';
const LABEL_29132 = 'component_29132';
export function Component29132({ value = 29132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29132, 'data-value': derived.doubled }, children);
}
export default Component29132;
