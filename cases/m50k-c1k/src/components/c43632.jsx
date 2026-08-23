import React from 'react';
const LABEL_43632 = 'component_43632';
export function Component43632({ value = 43632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43632, 'data-value': derived.doubled }, children);
}
export default Component43632;
