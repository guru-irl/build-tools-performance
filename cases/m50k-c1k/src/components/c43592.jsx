import React from 'react';
const LABEL_43592 = 'component_43592';
export function Component43592({ value = 43592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43592, 'data-value': derived.doubled }, children);
}
export default Component43592;
